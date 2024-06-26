"use client"
import Image from "next/image"
import { useState, useEffect } from "react"


const MobileImage = () => {
        // State for the current window width
        const [width, setWidth] = useState()

        // State for logo size
        const [imgSize, setImgSize] = useState(0)
    
        useEffect(() => {
            const handleResize = () => setWidth(window.innerWidth)
    
            // Set initial width on mount
            handleResize()
    
            // Add event listener
            window.addEventListener("resize", handleResize)
    
            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize)
        }, [])

        useEffect(() => {
            if(width < 480) {
                setImgSize(275)
            } else if(width < 640) {
                setImgSize(300)
            }
        }, [width])
  return (
    <Image 
          className="absolute right-0 top-16 z-0 mix-blend-luminosity opacity-60"
          src="/neckduster.png"
          alt="Neck Duster"
          width={imgSize}
          height={imgSize}
        />
  )
}

export default MobileImage
