"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import BarberStars from "./BarberStars"
import BarberPopUp from "./BarberPopUp"

const BarberSection = (props) => {
    const location = props.location
    const [noBarbers, setNoBarbers] = useState(true)
    const [barberSelected, setBarberSelected] = useState(false)
    const [selectedBarberId, setSelectedBarberId] = useState()
    const [activeBarbers, setActiveBarbers] = useState()
    const barbers = props.barbers

    useEffect(() => {
        if (barbers.length > 0) {
            setNoBarbers(false)
            const filteredBarbers = barbers.filter(barber => barber.location === location)
            setActiveBarbers(filteredBarbers)
        }
    }, [barbers])

    const handleBarberSelected = (barberId) => {
        setBarberSelected(true)
        setSelectedBarberId(barberId)
    }
  return (
    <div className={`${noBarbers ? "hidden" : "flex" } flex-col items-center`}>
            <h2 className="my-[60px]">Meet The <span className="abrilh2">Barbers</span></h2>
        <div className="container flex flex-wrap items-center justify-center gap-8">
            {activeBarbers && activeBarbers.map((barber) => (
                <button
                onClick={e => handleBarberSelected(barber.id)} 
                key={barber.id} className="group flex flex-col items-center bg-gradient-to-b from-[#FFFFFF] to-[#636363] dark:from-[#2B2828] dark:to-[#181717] shadow-2xl shadow-black/60 dark:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-redprimary/20 dark:shadow-redprimary/20 p-4 w-[30%] min-w-[300px] h-[400px] overflow-hidden hover:scale-110 outline-redprimary">
                    <div className="flex flex-col items-center">
                        <Image 
                        className="mb-[-10px]"
                        src="/logotop.svg"
                        width={130}
                        height={50}
                        alt=""
                        />
                        <h4 className="leading-[105%]">{barber.name}</h4>
                        <div className="flex items-center">
                            <div className="bg-redprimary w-[25px] h-[1px]" />
                            <BarberStars />
                            <div className="bg-redprimary w-[25px] h-[1px]" />
                        </div>
                    </div>
                    <p className="text-redprimary opacity-100 md:opacity-0 group-hover:opacity-100 transition-all my-3">Click To Learn More</p>
                    <div>
                        <Image 
                        src={barber.picture}
                        width={200}
                        height={100}
                        alt={`An image of the barber, ${barber.name}`}
                        />
                    </div>
                </button>
            ))}
        </div>
        <BarberPopUp state={barberSelected} barberId={selectedBarberId} barbers={barbers} setActive={setBarberSelected} location={location}/> 
    </div>
  )
}

export default BarberSection
