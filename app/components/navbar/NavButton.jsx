"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"



const NavButton = () => {
const [button, setButton] = useState({
    text: "",
    href: ""
})

    const router = useRouter()
    useEffect(() => {
        const currentUrl = window.location.href
        // CHANGE BEFORE PRODUCTION
        //Checkng if they are on the homepage.
        const jcExists = currentUrl.indexOf("johnsoncitybarbershop")
        const gvExists = currentUrl.indexOf("greenevillebarbershop")

        if(jcExists !== -1) {
            setButton({
                text: "BOOK HAIRCUT",
                href: "/johnsoncitybarbershop/barbers"
            })
        } else if (gvExists !== -1) {
            setButton({
                text: "BOOK HAIRCUT",
                href: "/greenevillebarbershop/barbers"
            }) 
        } else {
            setButton({
                text: "VIEW LOCATIONS",
                href: "/locations"
            })
        }
        
    },[])


    const handleClick = (e) => {
        e.preventDefault
        router.push(button.href)
    }
  return (
        <button 
        onClick={handleClick}
        className="outline-black dark:outline-white w-full p-1 md:p-2 bg-redprimary text-white hover:bg-redprimary/80 hover:transition-all transition-all">
            {button.text}
        </button>
  )
}

export default NavButton
