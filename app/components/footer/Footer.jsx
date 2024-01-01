"use client"
import { useState, useEffect } from "react"
import Link from 'next/link'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";


const Footer = () => {
    const [location, setLocation] = useState("")

    const locations = {
        johnsoncity: {
            number: "423-480-5884",
            href: "tel:+14234805884",
            email: "taylormadejc2017@gmail.com",
            emailHref: "mailto:taylormade2017@gmail.com",
            fbHref: "https://www.facebook.com/profile.php?id=100054568623716",
            instaHref: "https://www.instagram.com/taylormade_barbershop/",
            name: "Taylor-Made Barber Shop"    
        },
        greeneville: {
            number: "423-794-6333",
            href: "+142379463333",
            email: "taylormadejc2017@gmail.com",
            emailHref: "mailto:taylormade2017@gmail.com",
            fbHref: "https://www.facebook.com/profile.php?id=100055051766666",
            instaHref: "https://www.instagram.com/taylormade_groominglounge/",
            name: "Taylor-Made Grooming Lounge"    
        }
    }

    useEffect(() => {
        const currentUrl = window.location.href

        const jcExists = currentUrl.indexOf("johnsoncitybarbershop") !== -1
        const greenevilleExists = currentUrl.indexOf("greenevillebarbershop") !== -1

       if(jcExists) {
            setLocation("Johnson City")
       } else if(greenevilleExists) {
            setLocation("Greeneville")
       } else {
            setLocation("Johnson City")
       }
    },[]) 
  return (
    <footer className='bg-white dark:bg-darkprimary flex flex-col min-w-[300px] py-[60px]'>
        <div className='h-[1px] w-[80%] m-auto min-w-[300px] dark:bg-white/20 bg-black/20' />
            <div className="flex flex-col items-center md:flex-row py-[40px] w-[80%] m-auto md:items-start md:justify-around">
                <div className="link-wrapper flex flex-col items-center py-4">
                    <h5>Contacts</h5>
                    <Link aria-label="Get in touch via telephone" className="outline-black dark:outline-redprimary" href={location === "Johnson City" ? locations.johnsoncity.href : locations.greeneville.href }>{ location === "Johnson City" ? locations.johnsoncity.number : locations.greeneville.number }</Link>
                    <Link aria-label="Get in touch via email" className="outline-black dark:outline-redprimary" href={location === "Johnson City" ? locations.johnsoncity.emailHref : locations.greeneville.emailHref }>{ location === "Johnson City" ? locations.johnsoncity.email : locations.greeneville.email }</Link>
                </div>
                <div className="icon-wrapper flex flex-col items-center py-4">
                    <h5>Follow Our Socials</h5>
                    <div className="flex">
                        <Link aria-label="Facebook" className="outline-black dark:outline-redprimary" href={location === "Johnson City" ? locations.johnsoncity.fbHref : locations.greeneville.fbHref }><FaFacebookF size={25}/></Link>
                        <Link aria-label="Instagram" className="outline-black dark:outline-redprimary" href={location === "Johnson City" ? locations.johnsoncity.instaHref : locations.greeneville.instaHref }><FaInstagram size={25}/></Link>
                    </div>
                </div>
                <div className="link-wrapper flex flex-col items-center py-4">
                    <h5>Pages</h5>
                    <Link className="outline-black dark:outline-redprimary" href="/locations">Locations</Link>
                    <Link className="outline-black dark:outline-redprimary" href="/aboutus">About</Link>

                </div>
            </div>
        <div className='h-[1px] w-[80%] m-auto min-w-[300px] dark:bg-white/20 bg-black/20' />
        <div className="flex flex-col md:flex-row md:justify-between text-center md:text-left items-center container my-6">
            <span>
                <p className="footerLinks">
                    &copy; {location === "Johnson City" ? locations.johnsoncity.name : locations.greeneville.name} |
                    <Link className="outline-black dark:outline-redprimary" href="/privacy"> Privacy</Link> |
                    <Link className="outline-black dark:outline-redprimary" href="/accessibility"> Accessibility</Link>
                </p>   
            </span>
            <span>
                <Link className="outline-black dark:outline-redprimary" href="https://www.newgendigitalmedia.com"><p className="footerLinks">Website Powered By: NewGen Digital Media</p></Link>
            </span>
        </div>
    </footer>
  )
}

export default Footer
