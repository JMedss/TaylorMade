"use client"
import { usePathname, useRouter } from 'next/navigation'
import Buttons from './Buttons'
import { useState, useEffect, use } from 'react'


const CTAS = () => {
    const path = usePathname()

    // State for button text and link
    const [cta, setCta] = useState({
        text: "",
        link: ""
    })

    // Check the route and set the button text and link
    
    useEffect(() => {
        
        const jcExists = path.indexOf("johnsoncitybarbershop")
        const gvExists = path.indexOf("greenevillebarbershop")
        if(path === "/") {
            setCta({
                text: "VIEW LOCATIONS",
                link: "/locations"
            })
        } else if (jcExists !== -1) {
            setCta({
                text: "FRESHEN UP",
                link: "/johnsoncitybarbershop/barbers"
            })
        } else if (gvExists !== -1) {
            setCta({
                text: "FRESHEN UP",
                link: "/greenevillebarbershop/barbers"
            })
        }
    },[path])

    // Handle meet the barbers button
    const router = useRouter()
    const handleMeetTheBarbers = () => {
        const jcExists = path.indexOf("johnsoncitybarbershop")

        if (jcExists !== -1) {
            router.push("/johnsoncitybarbershop#barbers")
        } else {
            router.push("/greenevillebarbershop#barbers")
        }
    }
    
  return (
    <div className="flex flex-col-reverse gap-2 md:flex-row w-full md:gap-4 lg:gap-6">
        <Buttons text={cta.text} link={cta.link} classes="text-redprimary border-redprimary md:w-[350px] hover:text-[#FFFAFA] hover:bg-redprimary transition duration-1000 ease-in-out"/>
        <button onClick={handleMeetTheBarbers} className={path === "/" ? "hidden" : "underline text-[#212024] font-bold text-[24px] sm:text-[32px] hover:scale-105 opacity-90 transition duration-300 ease-in-out"}>MEET THE BARBERS</button>
    </div>
  )
}

export default CTAS
