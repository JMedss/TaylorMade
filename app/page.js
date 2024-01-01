"use client"
import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import HomeHero from "./components/hero/HomeHero"
import VideoSection from "./components/videosection/VideoSection"
import Features from "./components/features/Features"
import CTA from "./components/cta/CTA"






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
        const userAddress = results[0].formatted_address
        const jcExists = userAddress.indexOf("Johnson City")
        const gvExists = userAddress.indexOf("Greeneville")
        if(jcExists !== -1) {
          sessionStorage.setItem("redirected", "true")
          router.push("/johnsoncitybarbershop")
        } else if (gvExists !== -1) {
          sessionStorage.setItem("redirected", "true")
          router.push("/greenevillebarbershop")
        }
      })
    } 
  }, [userLocation])

   
    return (
      <main>
        <HomeHero />
        <VideoSection />
        <Features cta="VIEW LOCATIONS" href="/locations"/>
        <CTA  cta="VIEW LOCATIONS" href="/locations" src="/ctavideo.mp4"/>
      </main>
  ) 
} 