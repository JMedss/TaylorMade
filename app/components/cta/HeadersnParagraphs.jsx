"use client"
import Buttons from '../hero/Buttons'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const HeadersnParagraphs = () => {
    // Get path from cta text and link
    const path = usePathname()
    const [cta, setCta] = useState({
        barbershopName: "",
        text: "",
        link: ""
    })

    const [video, setVideo] = useState("")

    useEffect(() => {
        const checkPath = () => {
           if(path === "/johnsoncitybarbershop") {
               setCta({
                   barbershopName: "JOHNSON CITY BARBER SHOP",
                   text: "FRESHEN UP",
                   link: "/johnsoncitybarbershop/barbers"
               })
               setVideo("/ctavideo.mp4")
              } else if(path === "/greenevillebarbershop") {
                  setCta({
                      barbershopName: "GREENEVILLE BARBER SHOP",
                      text: "FRESHEN UP",
                      link: "/greenevillebarbershop/barbers"
                  })
                    setVideo("/ctagroominglounge.mp4")
                } else if(path === "/") {
                setCta({
                    barbershopName: "JOHNSON CITY OR GREENEVILLE BARBER SHOP",
                    text: "VIEW LOCATIONS",
                    link: "/locations"
                })
               setVideo("/ctavideo.mp4")
              }
           }

        // Check path on mount   
        checkPath()

    }, [path])
  return (
    <div className='flex flex-col container'>
        <div className='flex flex-col mb-24 gap-1'>
            <h2 className="main max-w-[1000px]">{`VISIT OUR ${cta.barbershopName} AND FIND THE RIGHT BARBER FOR YOU.`} </h2>
            <h3 className="subheading">It&apos;s more than a haircut.</h3>
        </div>
        <div className='flex flex-col w-[80%] max-w-[700px] gap-8 mb-24'>
            <p>Feel the energy as you walk through the door. The Taylor-Made experience is more than a haircut, it is a whole vibe. Leave refreshed. Leave energized. Leave happy.</p>
            <p>Don't miss out – secure your spot with our highly skilled barbers. Our appointments fill up quickly.</p>
            <Buttons text={cta.text} link={cta.link} classes="border-redprimary text-redprimary hover:bg-redprimary hover:text-[#FFFAFA] transition duration-1000 ease-in-out"/>
        </div>
        <div className='w-full shadow-xl shadow-black mb-24 border border-black'>
            <video className='w-full' aria-label='A video of the owner of Taylor-Made Barber Shops.' controls={true}>
                <source type="video/mp4" src={video} />
            </video>
        </div>
    </div>
  )
}

export default HeadersnParagraphs
