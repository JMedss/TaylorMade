"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

const Logo = () => {

    const { theme, setTheme } = useTheme()

    const [logo, setLogo] = useState({
        light: "",
        dark: "",
        alt: ""
    })
    
    const [location, setLocation] = useState("")

    const locations = {
        johnsoncity: {
            light: "/lightlogo.png",
            dark: "/darklogo.png",
            alt: "Taylor-Made Barber Shop logo"
        },
        greeneville: {
            light: "/groomingloungedarklogo.png",
            dark: "/groomingloungelightlogo.png",
            alt: "Taylor-Made Grooming Lounge logo"
        }
    }


    useEffect(() => {
       const currentUrl = window.location.href 


        const jcExists = currentUrl.indexOf("johnsoncitybarbershop") !== -1
        const greenevilleExists = currentUrl.indexOf("greenevillebarbershop") !== -1
        
        if(jcExists) {
            setLogo({
                light: locations.johnsoncity.light,
                dark: locations.johnsoncity.dark,
                alt: locations.johnsoncity.alt
            })
            setLocation("Johnson City")
        } else if(greenevilleExists) {
            setLogo({
                light: locations.greeneville.light,
                dark: locations.greeneville.dark,
                alt: locations.greeneville.alt
            })
            setLocation("Greeneville")
        } else {
            setLogo({
                light: locations.johnsoncity.light,
                dark: locations.johnsoncity.dark,
                alt: locations.johnsoncity.alt
            })
            setLocation("Johnson City")
        }
    }, [])


  return (
    <div className="logo-wrapper">
      <Image 
      className={location === "Johnson City" ? "ml-[-60px] min-w-[150px]" : "ml-0 min-w-[150px]" }
      src={theme === "dark" ? logo.dark : logo.light }
      width={location === "Johnson City" ? 250 : 150}
      height={500}
      alt={logo.alt}
      priority
      />
    </div>
  )
}

export default Logo

