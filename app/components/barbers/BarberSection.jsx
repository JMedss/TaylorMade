"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { FaCircle } from "react-icons/fa"
import { PiTiktokLogoThin } from "react-icons/pi"
import { SlSocialYoutube, SlSocialInstagram, SlSocialFacebook } from "react-icons/sl"
import Link from "next/link"
import { useTheme } from "next-themes"



const BarberSection = (props) => {
    const location = props.location
    const [noBarbers, setNoBarbers] = useState(true)

    const [activeBarbers, setActiveBarbers] = useState()
    const barbers = props.barbers

    // Get date for micah
    const today = new Date()
    const day = today.getDay()


    useEffect(() => {
        if (barbers.length > 0) {
            setNoBarbers(false)
            let filteredBarbers = barbers.filter(barber => barber.location === location)

            if (location === "Greeneville" && (day === 4 || day === 5 || day === 6 || day === 1)) {
                filteredBarbers = filteredBarbers.filter(barber => barber.name !== "Micah Taylor")
            } else if (location === "Johnson City" && (day === 1 || day === 2 || day === 3)) {
                filteredBarbers = filteredBarbers.filter(barber => barber.name !== "Micah Taylor")
            } else if (location === "Greeneville" && (day === 2 || day === 3 )) {
                filteredBarbers = filteredBarbers.filter(barber => barber.name !== "Jacques Taylor")
            } else if (location === "Johnson City" && (day === 4 || day === 5 || day === 6 )) {
                filteredBarbers = filteredBarbers.filter(barber => barber.name !== "Jacques Taylor")
            }
            setActiveBarbers(filteredBarbers)
        }
    }, [barbers, location, day])

    




  return (
    <div className={`${noBarbers ? "hidden" : "flex" } flex-col items-center bg-[#FFFAFA] pt-[150px] pb-[50px]`}>
            <h2 className="main mb-24">Meet The Barbers</h2>
        <div className="container flex flex-wrap items-center justify-center gap-8">
            {activeBarbers && activeBarbers.map((barber) => (
                <div key={barber.id} className= "bg-[#E8E8E8] dark:bg-[#181717] flex flex-col w-full p-2 min-w-[340px] max-w-[450px] shadow-xl shadow-black/40 dark:shadow-black">
                    <div className="flex flex-col justify-center w-full">
                        <div className="flex items-center w-full justify-center">
                            <div className="bg-black dark:bg-white h-[1px] w-[25%]"/>
                            <Image
                            className="mx-1"
                            src="/scissorsicon.svg"
                            width={8}
                            height={8}
                            alt="scissors icon"
                            priority
                            />
                            <p className="text-center text-[12px]">{location === "Johnson City" ? "TAYLOR-MADE BARBER SHOP" : "TAYLOR-MADE GROOMING LOUNGE"}</p>
                            <Image
                            className="mx-1"
                            src="/scissorsicon.svg"
                            width={8}
                            height={8}
                            alt="scissors icon"
                            priority
                            />
                            <div className="bg-black dark:bg-white h-[1px] w-[25%]"/>
                        </div>

                        <h3 className="barbers tracking-wider w-full text-center text-[30px]  -mt-[0.25px] lg:text-nowrap">{barber.name}</h3>

                        <div className="flex w-full justify-center">
                            <div className="bg-black dark:bg-white h-[1px] w-full max-w-[404px]" />
                        </div>

                        <div className="flex items-center w-full justify-center my-1">
                            <p className="text-center text-[12px]">{location === "Johnson City" ? "817 WEST WALNUT ST. SUITE #7" : "907 ERWIN HWY"}</p>
                            <Image
                            className="mx-1"
                            src="/barberchairicon.svg"
                            width={20}
                            height={20}
                            />
                            <p className="text-center text-[12px]">{location === "Johnson City" ? "JOHNSON CITY, TENNESSEE" : "TUSCULUM, TENNESSEE"}</p>
                        </div>

                        <div className="flex w-full justify-center">
                            <div className="bg-black dark:bg-white h-[1px] w-full max-w-[404px]" />
                        </div>

                    </div>

                    <div className="flex justify-around w-full my-2">
                        <div className="flex items-center justify-center">
                            <Image
                            src={barber.picture}
                            width={110}
                            height={110}
                            alt={barber.name}
                            priority
                            />
                        </div>

                        <div className="flex flex-col items-center">
                                <h6 className="font-abril-fatface text-redprimary text-[18px] md:text-[22px]">MY SIGNATURE STYLES</h6>

                                <div className="flex flex-col">
                                    <div className="flex items-center">
                                        <p className="text-[14px] md:text-[18px]">{barber.benefitOne ? barber.benefitOne.toUpperCase() : "HAIRCUTS"}</p>
                                        <FaCircle size={8} className="mx-1"/>
                                        <p className="text-[14px] md:text-[18px]">{barber.benefitTwo ? barber.benefitTwo.toUpperCase() : "TAPERS"}</p>
                                        <FaCircle size={8} className="mx-1"/>
                                        <p className="text-[14px] md:text-[18px]">{barber.benefitThree ? barber.benefitThree.toUpperCase() : "FADES"}</p>
                                    </div>
                                    <div className="flex items-center w-full justify-center">
                                        <FaCircle size={8} className="mx-1"/>
                                        <p className="text-[14px] md:text-[18px]">{barber.benefitFour ? barber.benefitFour.toUpperCase() : "TRIMS"}</p>
                                    </div>
                                </div>

                                <div className="flex w-full justify-center my-2">
                                    <div className="bg-redprimary h-[1px] w-[50%]" />
                                </div>

                                <div className="flex items-center justify-center gap-2 w-full">
                                    <Link 
                                    href={barber.facebook ? barber.facebook : "https://www.facebook.com"}
                                    target="_blank"
                                    >
                                        <SlSocialFacebook size={22} className="text-black/20 dark:text-white/60"/>
                                    </Link>

                                    <Link
                                    href={barber.instagram ? barber.instagram : "https://www.instagram.com dark:text-white/60"}
                                    target="_blank"
                                    >
                                        <SlSocialInstagram size={22} className="text-black/20 dark:text-white/60"/>
                                    </Link>

                                    <Link
                                    href={barber.youtube ? barber.youtube : "https://www.youtube.com"}
                                    target="_blank"
                                    >
                                        <SlSocialYoutube size={26} className="text-black/20 dark:text-white/60"/>
                                    </Link>

                                    <Link 
                                    href={barber.tiktok ? barber.tiktok : "https://www.tiktok.com"}
                                    target="_blank"
                                    >
                                        <PiTiktokLogoThin size={24} className="text-black/20 dark:text-white/60"/>
                                    </Link>
                                </div>
                                <button onClick={() => window.open(barber.link)} className="w-full bg-redprimary text-white font-bold mt-2 text-[20px]">BOOK NOW</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default BarberSection
