"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"

const LocationCard = (props) => {

    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault()
        router.push(props.href)
    }

  return (
    <button 
    onClick={handleClick}
    className='outline-black dark:outline-white card-wrapper bg-redprimary hover:bg-redprimary/80 transition-all shadow-lg w-full h-[100px] md:h-[20vh] flex items-center justify-between'>
        <div className="w-[20vw] h-full bg-[#F7F6F6] relative">
            <Image
            className={`absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] ${props.minwidth}`}
            src={props.img}
            width={props.size}
            height={200}
            alt={props.alt}
            priority
            />
        </div>
        <div className="flex flex-col w-[50%] items-center mr-8 sm:mr-[75px] lg:mr-[100px] xl:mr-[125px] 2xl:mr-[150px] gap-4">
            <h2 className="text-center leading-[80%] text-white">{props.name}</h2>
            <p className="text-black text-center leading-[80%]">{props.address}</p>
        </div>
    </button>
  )
}

export default LocationCard
