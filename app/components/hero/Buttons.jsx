"use client"
import { useRouter } from "next/navigation"

const Buttons = ({ text, classes, link }) => {
  
  // Handle button route 
  const router = useRouter()
  const handleRouter = () => {
    router.push(link)
  }

  return (
    <button onClick={handleRouter} className={`${classes} border-2 py-1 px-2 text-[24px] font-bold sm:text-[32px] lg:text-[36px]`}>
      {text}
    </button>
  )
}

export default Buttons
