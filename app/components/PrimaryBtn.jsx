"use client"

import { useRouter } from "next/navigation"


const PrimaryBtn = () => {
    const router = useRouter()


    


        const handleClick = (e) => {
            e.preventDefault
            router.push("/locations")
        }
  return (
        <button 
        onClick={handleClick}
        className="outline-black dark:outline-redprimary p-2 shadow-lg text-white w-[80vw] md:w-[25vw] text-[16px] max-w-[400px] md:max-w-[250px] min-w-[200px] bg-redprimary border border-redprimary hover:bg-redprimary/90 transition-all">
            VIEW LOCATIONS
        </button>
  ) 
}

export default PrimaryBtn
