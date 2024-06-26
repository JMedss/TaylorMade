"use client"
import Image from "next/image"
import { useState, useEffect, use } from "react"
import { useRouter, usePathname } from "next/navigation"

const Logo = () => {
    // State for the current window width
    const [width, setWidth] = useState()

    // State for logo size
    const [logoSize, setLogoSize] = useState(0)

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)

        // Set initial width on mount
        handleResize()

        // Add event listener
        window.addEventListener("resize", handleResize)

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize)
    }, [])



    // Function to push to the home page
    const router = useRouter()

    const handleLogoClick = () => {
        router.push("/")
    }

    const currentPath = usePathname()

   useEffect(() => {
    const gvExists = currentPath.indexOf("/greenevillebarbershop")
    
    if(width < 640 && gvExists !== -1) {
        setLogoSize(150)
    } else if(width > 640 && gvExists !== -1) {
        setLogoSize(175)
    } else if(width < 640) {
        setLogoSize(60) 
    } else {
        setLogoSize(80)
    }
   }, [width, currentPath])

   // Get the current pathname to determine logo
    const [logo, setLogo] = useState({
        src: "",
        alt: ""
    })

    const gvExists = currentPath.indexOf("/greenevillebarbershop")
    useEffect(() => {

        if(gvExists !== -1) {
            setLogo({
                src: "/groomingloungedarklogo.png",
                alt: "Taylor-Made Grooming Lounge Logo"
            })
        } else {
            setLogo({
                src: "/newlogo.svg",
                alt: "Taylor-Made Barber Shop Logo"
            })
        }
    }, [currentPath])
  return (
    <div className="flex items-center">
        <button onClick={handleLogoClick} className={gvExists !== -1 ? "flex items-center justify-center mt-6" : "flex items-center justify-center"}>
                <Image src={logo.src} alt={logo.alt} width={logoSize} height={logoSize} priority />
        </button>
    </div>
  )
}

export default Logo

