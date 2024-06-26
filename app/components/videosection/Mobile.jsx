"use client"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect} from "react"


const Mobile = () => {
  // Check path to set barber shop name
  const path = usePathname()
  const [barberShop, setBarberShop] = useState("")


  useEffect(() => {
    const gvExists = path.indexOf("greeneville")
    if(gvExists !== -1) {
      setBarberShop("TAYLOR-MADE GROOMING LOUNGE")
    } else {
      setBarberShop("TAYLOR-MADE BARBER SHOP")
    }
  },[path])


  return (
    <div className='md:hidden flex flex-col items-center w-full mt-section'>
      {/* Top Line */}
      <div className="flex items-center w-full">
        <hr className="w-full border-1 border-black"/>
        <Image className="mr-1" src="/scissorsicon.svg" width={20} height={20} />
        <span className="sm:text-[18px] whitespace-nowrap mx-1">{barberShop}</span>
        <Image className="ml-1" src="/scissorsicon.svg" width={20} height={20} />
        <hr className="w-full border-1 border-black"/>
      </div>

      {/* Words */}
        <div className="flex items-center justify-center w-full">
          <div className="sentences flex gap-4">
            <div className="sentences-slide flex items-center gap-4">
                <h2 className="whitespace-nowrap main">FEEL THE <span className="text-[36px] sm:text-[38px] text-redprimary font-abril-fatface">ATMOSPHERE</span> WHEN YOU WALK IN.</h2>
                <h2 className="whitespace-nowrap main">FIND THE RIGHT BARBER FOR YOUR <span className="text-[36px] sm:text-[38px] text-redprimary font-abril-fatface">HAIR STYLE.</span></h2>
                <h2 className="whitespace-nowrap main">BOOK ONLINE TO <span className="text-[36px] sm:text-[38px] text-redprimary font-abril-fatface">SAVE TIME</span>  AT THE BARBER SHOP.</h2>
            </div>
            <div className="sentences-slide flex items-center gap-4">
                <h2 className="whitespace-nowrap main">FEEL THE <span className="text-[36px] sm:text-[38px] text-redprimary font-abril-fatface">ATMOSPHERE</span> WHEN YOU WALK IN.</h2>
                <h2 className="whitespace-nowrap main">FIND THE RIGHT BARBER FOR YOUR <span className=":text-[36px] sm:text-[38px] text-redprimary font-abril-fatface">HAIR STYLE.</span></h2>
                <h2 className="whitespace-nowrap main">BOOK ONLINE TO <span className="text-[36px] sm:text-[38px] text-redprimary font-abril-fatface">SAVE TIME</span>  AT THE BARBER SHOP.</h2>
            </div>
          </div>
        </div>

      {/* Bottom Line */}
      <div className="flex items-center w-full mb-[80px]">
        <hr className="w-full border-1 border-black"/>
      </div>
    </div>
  )
}

export default Mobile
