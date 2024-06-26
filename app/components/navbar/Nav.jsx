"use client"
import Link from "next/link"
import NavButton from "./NavButton"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { IoPhonePortraitOutline } from "react-icons/io5"
import { AiOutlineMail } from "react-icons/ai"
import { FaInstagramSquare } from "react-icons/fa"
import { FaFacebookSquare } from "react-icons/fa"

const Nav = () => {
    // Setting state for phone number, instagram, and facebook
    const [phoneNumber, setPhoneNumber] = useState("")
    const [instagram, setInstagram] = useState("")
    const [facebook, setFacebook] = useState("")

    // Find path for active link and to set links
    const path = usePathname()

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

    // State for the current window width
    const [width, setWidth] = useState()

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)

        // Set initial width on mount
        handleResize()

        // Add event listener
        window.addEventListener("resize", handleResize)

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize)
    }, [])


  return (
    <div className="sm: hidden md:flex flex-col gap-2">
        <div>
            <ul className="flex items-center justify-end gap-2">
                <li><Link aria-label="Telephone" href={`tel:${phoneNumber}`}><IoPhonePortraitOutline size={width < 1280 ? 25 : 33} /></Link></li>
                    <hr className="h-[24px] w-[1px] bg-redprimary"/>
                <li><Link aria-label="Email" href="mailto:taylormade2017@gmail.com"><AiOutlineMail size={width < 1280 ? 25 : 33} /></Link></li>
                    <hr className="h-[24p               x] w-[1px] bg-redprimary"/>
                <li><Link aria-label="Instagram" target="_blank" href={`${instagram}`}><FaInstagramSquare size={width < 1280 ? 25 : 33} /></Link></li>
                    <hr className="h-[24px] w-[1px] bg-redprimary"/>
                <li><Link aria-label="Facebook" target="_blank" href={`${facebook}`}><FaFacebookSquare size={width < 1280 ? 25 : 33} /></Link></li>
            </ul>
        </div>
        <nav className="outline-redprimary">
            <ul className="flex justify-center items-center gap-2">
                <li>
                    <Link className={`${path === "/" ? "text-redprimary" : "text-black"} font-bold xl:text-[20px]`} href="/">Home</Link>
                </li>
                <li>
                    <Link className={`${path === "/locations" ? "text-redprimary" : "text-black"} font-bold xl:text-[20px]`} href="/locations">Locations</Link>
                </li>
                <li>
                    <Link className={`${path === "/aboutus" ? "text-redprimary" : "text-black"} font-bold xl:text-[20px]`} href="/aboutus">About</Link>
                </li>
                <li>
                    <NavButton />
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav
