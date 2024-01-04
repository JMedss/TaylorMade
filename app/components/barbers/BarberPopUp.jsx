"use client"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"                    
import BarberStars from "./BarberStars"
import { PiTiktokLogoThin } from "react-icons/pi"
import { SlSocialYoutube, SlSocialInstagram, SlSocialFacebook } from "react-icons/sl"



const BarberPopUp = (props) => {
    const location = props.location
    const router = useRouter()
    const barberId = props.barberId
    const active = props.state 
    const barbers = props.barbers
    const setActive = props.setActive
    const [barber, setBarber] = useState()
    useEffect(() => { 
        if(active) {
            const filteredBarber = barbers.filter((barber) => barberId === barber.id)
            setBarber(filteredBarber[0])
        }
    }, [active, barberId, barbers])

    const closePopUp = (e) => {
        e.preventDefault(
        setActive(!active)
        )
    } 

    const handleBook = (e) => {
        e.preventDefault()
        const url = location === "Johnson City" ? `/johnsoncitybarbershop/barbers/${barber.name}` : `/greenevillebarbershop/barbers/${barber.name}` 
        router.push(url)
    } 

  return (
    <div className={`${active ? "flex" : "hidden"} fixed bg-black/40 h-screen top-0 left-0 w-screen items-center justify-center`}>
      <div className="flex flex-col bg-gradient-to-b from-[#FFFFFF] to-[#636363] dark:from-[#2B2828] dark:to-[#181717] min-w-[300px] w-[40%] p-8 z-50">
        <div className="flex justify-end">
            <button onClick={closePopUp} className="text-redprimary w-[24px] text-[24px] hover:scale-125">X</button>
        </div>
        <div className="w-full h-full flex flex-col items-center">
            <div className="flex flex-col items-center">
                <Image 
                className="mb-[-10px]"
                src="/logotop.svg"
                width={130}
                height={100}
                alt=""
                />
                <h4>{barber ? barber.name : ""}</h4>
                <div className="flex items-center">
                    <div className="bg-redprimary h-[1px] w-[25px]"/>
                        <BarberStars />
                    <div className="bg-redprimary h-[1px] w-[25px]"/>
                </div>
            </div>
            <div className="border border-redprimary w-[150px] mt-10 flex flex-col p-2">
                <div>
                    <p>{barber  && barber.benefitOne ? barber.benefitOne : ""}</p>
                    <div className={`${barber  && barber.benefitOne ? "w-full h-[1px] bg-redprimary" : "hidden"}`} />
                </div>
                <div>
                    <p>{barber  && barber.benefitTwo ? barber.benefitTwo : ""}</p>
                    <div className={`${barber  && barber.benefitTwo ? "w-full h-[1px] bg-redprimary" : "hidden"}`} />
                </div>
                <div>
                    <p>{barber  && barber.benefitThree ? barber.benefitThree : ""}</p>
                    <div className={`${barber  && barber.benefitThree ? "w-full h-[1px] bg-redprimary" : "hidden"}`} />
                </div>
                <div>
                    <p>{barber  && barber.benefitFour ? barber.benefitFour : ""}</p>
                    <div className={`${barber  && barber.benefitFour ? "w-full h-[1px] bg-redprimary" : "hidden"}`} />
                </div>
                <div className="flex items-center justify-center gap-2 my-3">
                {barber && (
                        <>
                            <Link className="outline-redprimary" href={barber.facebook !== "" ? barber.facebook : "https://www.facebook.com"} target="_blank">
                                <SlSocialFacebook size={24} className="text-redprimary"/>
                            </Link>
                            <Link className="outline-redprimary" href={barber.instagram !== "" ? barber.instagram : "https://www.instagram.com"} target="_blank">
                                <SlSocialInstagram size={24} className="text-redprimary"/>
                            </Link>
                            <Link className="outline-redprimary" href={barber.tiktok !== "" ? barber.tiktok : "https://www.tiktok.com"} target="_blank">
                                <PiTiktokLogoThin size={24} className="text-redprimary"/>
                            </Link>
                            <Link className="outline-redprimary" href={barber.youtube !== "" ? barber.youtube : "https://www.youtube.com"} target="_blank">
                                <SlSocialYoutube size={24} className="text-redprimary"/>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
        <div className="flex justify-center mt-6">
            <button onClick={handleBook} className="w-[150px] bg-redprimary py-1 font-bold hover:opacity-60 transition-all">Book {barber ? barber.name : ""}</button>
        </div>
      </div>
    </div>
  )
}

export default BarberPopUp
