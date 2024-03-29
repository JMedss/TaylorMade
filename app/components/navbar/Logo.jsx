"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"

const Logo = () => {

    const router = useRouter()
    const { theme, setTheme } = useTheme()

    const [logo, setLogo] = useState({
        light: "",
        dark: "",
        alt: ""
    })
    
    const [location, setLocation] = useState("")
    const [currentUrl, setCurrentUrl] = useState("")
    const locations = {
        johnsoncity: {
            light: "/newlogo.svg",
            dark: "/newlogowhite.svg",
            alt: "Taylor-Made Barber Shop logo"
        },
        greeneville: {
            light: "/groomingloungedarklogo.png",
            dark: "/groomingloungelightlogo.png",
            alt: "Taylor-Made Grooming Lounge logo"
        }
    }


    useEffect(() => {
        setCurrentUrl(window.location.href)
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
    }, [locations.greeneville.dark, locations.greeneville.light, locations.greeneville.alt, locations.johnsoncity.dark, locations.johnsoncity.light, locations.johnsoncity.alt, currentUrl])


  return (
    <button 
    className="logo-wrapper"
    onClick={() => router.push("/") }
    >
      <Image 
      className={location === "Johnson City" ? "" : "ml-0 min-w-[150px]" }
      src={theme === "dark" ? logo.dark : logo.light }
      width={location === "Johnson City" ? 60 : 150}
      height={10}
      alt={logo.alt}
      priority
      />
    </button>
  )
}

export default Logo

