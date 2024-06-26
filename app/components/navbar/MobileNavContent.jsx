"use client"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { IoPhonePortraitOutline } from "react-icons/io5"
import { AiOutlineMail } from "react-icons/ai"
import { FaInstagramSquare } from "react-icons/fa"
import { FaFacebookSquare } from "react-icons/fa"
import Link from "next/link"

const MobileNavContent = ({ state, setState }) => {
    // Find path for active link and to set shop name
    const path = usePathname()
    const router = useRouter()

    // State for shop name
    const [shopName, setShopName] = useState("")

    // Set shop name based on path
    useEffect(() => {
        if (path === "/johnsoncitybarbershop") {
            setShopName("Taylor-Made Barber Shop")
        } else if (path === "/greenevillebarbershop") {
            setShopName("Taylor-Made Grooming Lounge")
        } else {
            setShopName("Taylor-Made Barber Shop")
        }
    }, [path])

    // Get Time of Day for proper greeting
    const [greeting, setGreeting] = useState("")

    useEffect(() => {
        const date = new Date()
        const hour = date.getHours()
        if (hour < 12) {
            setGreeting("Good Morning")
        } else if (hour < 18) {
            setGreeting("Good Afternoon")
        } else {
            setGreeting("Good Evening")
        }
    },[])

    // State for the current window width
    const [width, setWidth] = useState()
    // State for logo size
    const [iconSize, setIconSize] = useState(0)

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)

        // Set initial width on mount
        handleResize()

        // Add event listener
        window.addEventListener("resize", handleResize)

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        width < 640 ? setIconSize(20) : setIconSize(30)
    }, [width])
    

    // State for social media links, email, and phone number
    const [phoneNumber, setPhoneNumber] = useState("")
    const [instagram, setInstagram] = useState("")
    const [facebook, setFacebook] = useState("")

    useEffect(() => {
        if (path === "/greenevillebarbershop") {
            setPhoneNumber("423-794-6333")
            setInstagram("https://www.instagram.com/taylormade_groominglounge/")
            setFacebook("https://www.facebook.com/people/TaylorMade-Grooming-Lounge/100055051766666/")
        } else {
            setPhoneNumber("423-480-5884")
            setInstagram("https://www.instagram.com/taylormade_barbershop/")
            setFacebook("https://www.facebook.com/people/TaylorMade-Barbershop/100054568623716/")
        }
    },[path])


    // Function to handle navigation
    const handleNav = (route) => () => {
        router.push(route)
        setState(!state)
    }

    // State for where to send user upon clicking CTA and CTA text
    const [button, setButton] = useState({
        text: "",
        href: ""
    })

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
    
  return (
    <div className='flex flex-col items-center my-4'>
        <div className='flex items-center w-full'>
            <hr className="border-t-1 border-black w-full" />
            <span className="text-[14px] whitespace-nowrap mx-1">{shopName}</span>
            <hr className="border-t-1 border-black w-full" />
        </div>
        <span className='w-full flex justify-center font-abril-fatface text-[24px] sm:text-[28px] text-redprimary'>{greeting}</span>
        <hr className='w-full border-t-1 border-black' />

        <nav className="mt-4 w-full">
            <ul className="flex flex-col justify-center w-full">
                <li><button onClick={handleNav("/")} className={`text-[16px] sm:text-[18px] sm:p-3 border border-black  font-bold my-1 p-2 w-full hover:border-redprimary hover:text-redprimary transition duration-500 ease-in-out ${path === "/" ? "text-[#FFFAFA] blue-gradient" : "text-black"}`}>Home</button></li>
                <li><button onClick={handleNav("/locations")} className={`text-[16px] sm:text-[18px] sm:p-3 border border-black  font-bold my-1 p-2 w-full hover:border-redprimary hover:text-redprimary transition duration-500 ease-in-out ${path === "/locations" ? "text-[#FFFAFA] blue-gradient" : "text-black"}`}>Locations</button></li>
                <li><button onClick={handleNav("/aboutus")} className={`text-[16px] sm:text-[18px] sm:p-3 border border-black  font-bold my-1 p-2 w-full hover:border-redprimary hover:text-redprimary transition duration-500 ease-in-out ${path === "/aboutus" ? "text-[#FFFAFA] blue-gradient" : "text-black"}`}>About</button></li>
                <li><button onClick={handleNav(button.href)} className="w-full border border-redprimary text-redprimary font-bold p-2 text-[16px] sm:text-[18px] sm:p-3 hover:bg-redprimary hover:text-[#FFFAFA] transition-color duration-1000 ease-in-out">{button.text}</button></li>
            </ul>
        </nav>

        <div className="flex items-center justify-center w-full mt-4 gap-4 sm:justify-aroundD">
            <Link aria-label="Telephone"  href={`tel:${phoneNumber}`}>
                    <IoPhonePortraitOutline size={iconSize} />
            </Link>
            <hr className="h-[24px] w-[1px] bg-redprimary"/>
            <Link aria-label="Email"  href="mailto:taylormade2017@gmail.com" className="flex items-center">
                <AiOutlineMail size={iconSize} />
            </Link>
            <hr className="h-[24px] w-[1px] bg-redprimary"/>
            <Link aria-label="Instagram"  target="_blank" href={`${instagram}`} className="flex items-center">
                <FaInstagramSquare size={iconSize} />
            </Link>
            <hr className="h-[24px] w-[1px] bg-redprimary"/>
            <Link aria-label="Facebook"  target="_blank" href={`${facebook}`} className="flex items-center">
                <FaFacebookSquare size={iconSize} />
            </Link>
        </div>
    </div>
  )
}

export default MobileNavContent
