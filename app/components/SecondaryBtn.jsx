"use client"
import { useRouter } from "next/navigation"


const SecondaryBtn = () => {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault
    router.push("/barbers")
}
  return (
      <button 
      onClick={handleClick}
      className='outline-black dark:outline-redprimary hidden md:block p-2 shadow-sm text-[16px] min-w-[150px] w-[25vw] max-w-[250px] border border-redprimary hover:border-redprimary/90 transition-all'>
          MEET THE BARBERS
      </button>
  )
}

export default SecondaryBtn
