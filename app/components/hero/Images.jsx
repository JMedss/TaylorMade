"use client"
import Image from "next/image"
import { useState, useEffect } from "react"

const Images = () => {

     // State for the current window width
     const [width, setWidth] = useState()
 
     useEffect(() => {
         const handleResize = () => setWidth(window.innerWidth)
 
         // Set initial width on mount
         handleResize()
 
         // Add event listener
         window.addEventListener("resize", handleResize)
 
         // Remove event listener on cleanup
         return () => window.removeEventListener("resize", handleResize)
     }, [])

  return (
    <>
        {/* Mobile Red Certified Stamp */}
        <div>
              <Image
                className="absolute -top-8  left-1/2 transform -translate-x-1/2 md:hidden"
                src={"/redstampslanted.svg"}
                alt="Red Taylor-Made Stamp Decoration"
                width={500}
                height={200}
                priority
              />
          </div>
          {/* Desktop Black Certified Stamp */}
          <div className="group">
              <Image
                className="hidden md:flex absolute top-0 -right-16 group-hover:opacity-0 transition duration-1000 ease-in-out"
                src={"/blackstamp.svg"}
                alt="Black Taylor-Made Stamp Decoration"
                width={width < 1000 ? 350 : 400}
                height={200}
                priority
              />
                {/* Desktop Red Certified Stamp */}
                <Image
                    className="hidden md:flex absolute top-12 -right-8 opacity-0 transition duration-1000 ease-in-out group-hover:opacity-100"
                    src={"/redstamp.svg"}
                    alt="Red Taylor-Made Stamp Decoration"
                    width={width < 1000 ? 250 : 300}
                    height={200}
                    priority
                />
          </div>

          {/* Micah Taylor */}
          <div>
              <Image
                className="absolute top-40 left-1/2 transform -translate-x-1/2 md:top-20 md:opacity-80 lg:opacity-100"
                src={"/micahtaylor.png"}
                alt="A picture of the owner, Micah Taylor, standing in front of a barber chair."
                width={width < 768 ? 250 : 325}
                height={200}
                priority
              />
          </div>
          {/* Barber Chair */}
          <div>
              <Image
                className="absolute top-[340px] left-1/2 transform -translate-x-1/2 md:top-[300px]"
                src={"/barberchair.png"}
                alt="Barber Chair"
                width={width < 768 ? 175 : 240}
                height={200}
                priority
              />
          </div>
    </>
  )
}

export default Images
