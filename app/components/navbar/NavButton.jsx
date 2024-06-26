"use client"
import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"



const NavButton = () => {

const [button, setButton] = useState({
    text: "",
    href: ""
})
    const router = useRouter()
    const path = usePathname()

    
    useEffect(() => {
        const jcExists = path.indexOf("/johnsoncitybarbershop")
        const gvExists = path.indexOf("/greenevillebarbershop")

        if(jcExists !== -1) {
            setButton({
                text: "FRESHEN UP",
                href: "/johnsoncitybarbershop/barbers"
            })
        } else if (gvExists !== -1) {
            setButton({
                text: "FRESHEN UP",
                href: "/greenevillebarbershop/barbers"
            }) 
        } else {
            setButton({
                text: "VIEW LOCATIONS",
                href: "/locations"
            })
        }
        
    },[path])


    const handleClick = (e) => {
        e.preventDefault
        router.push(button.href)
    }
  return (
        <button 
        onClick={handleClick}
        className="min-w-[150px] xl:min-w-[180px] font-bold text-[18px] w-full p-2 xl:text-[22px] xl:p-3 border border-redprimary text-redprimary hover:bg-redprimary hover:text-[#FFFAFA] transition-colors duration-1000 ease-in-out">
            {button.text}
        </button>
  )
}

export default NavButton
