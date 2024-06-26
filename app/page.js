"use client"
import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import VideoSection from "./components/videosection/VideoSection"
import Features from "./components/features/Features"
import CTA from "./components/cta/CTA"
import Hero from "./components/hero/Hero"






export default function Home() {


  const router = useRouter()
  const currentPath = useRouter()  
  const [userLocation, setUserLocation] = useState({
    lat: "",
    lng: "",
  })


  useEffect(() => {
    
    if("geolocation" in navigator){
      navigator.geolocation.getCurrentPosition((pos) => {
        setUserLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        })
      }, (err) => {
        console.log("Error fetching location:", err.message)
      })
    } else {
      console.log("Geolocation not supported")
    }
  },[])


  useEffect(() => {
    const redirected = sessionStorage.getItem("redirected")
    if(redirected !== "true" && userLocation.lat !== "" && userLocation.lng !== "") {
      axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
        params: {
          latlng: `${userLocation.lat},${userLocation.lng}`,
          key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY
        }
      })
      .then(function(response) {
        const results = response.data.results
        if(results.length > 0) {
        const userAddress = results[0].formatted_address
        const jcExists = userAddress.indexOf("Johnson City")
        const gvExists = userAddress.indexOf("Greeneville")
        if(jcExists !== -1) {
          sessionStorage.setItem("redirected", "true")
          router.push("/johnsoncitybarbershop")
        } else if (gvExists !== -1) {
          sessionStorage.setItem("redirected", "true")
          router.push("/greenevillebarbershop")
        } else {
          console.log("No locations found")
        }
      }
      })
      .catch(function(error) {
        console.log("Error fetching address:", error.message)
      })
    } 
  }, [userLocation, router])

   
    return (
      <main> 
        <Hero />   
        <VideoSection />
        <Features />
        <CTA  /> 
      </main>
  ) 
} 