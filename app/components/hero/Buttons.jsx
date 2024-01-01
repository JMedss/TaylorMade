"use client"
import { useRouter } from "next/navigation"

const Buttons = (props) => {
  const urls = props.urls
  const router = useRouter()
  return (
    <>
    <button 
    onClick={() => {router.push(urls[0])}}
    className="outline-black dark:outline-white p-2 shadow-lg text-white w-[80vw] md:w-[25vw] text-[16px] max-w-[400px] md:max-w-[250px] min-w-[200px] bg-redprimary border border-redprimary hover:bg-redprimary/90 transition-all">
        BOOK HAIRCUT
    </button>
    <button 
    onClick={() => {router.push(urls[1])}}
    className="outline-black dark:outline-white hidden md:block p-2 shadow-sm text-[16px] min-w-[150px] w-[25vw] max-w-[250px] border border-redprimary hover:border-redprimary/90 transition-all">
        MEET THE BARBERS 
    </button>
    </>
  )
}

export default Buttons
