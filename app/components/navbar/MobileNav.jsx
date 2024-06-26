"use client"
import Image from "next/image"
import { RxHamburgerMenu } from "react-icons/rx"
import { IoCloseOutline } from "react-icons/io5"
import { useEffect, useState, useRef } from "react"
import MobileNavContent from "./MobileNavContent"

const MobileNav = () => {
  // State for mobile nav
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef()

  // Function to toggle mobile nav
  const toggleMobileNav = () => {
    setIsOpen(!isOpen)
  }

  // Disable scrolling when mobile nav is open
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [isOpen])

    // Close mobile nav when clicking outside
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      // Bind the event listener if the nav is open
      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }
  
      return () => {
        // Cleanup event listener on component unmount
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isOpen])

    

  return (
    <>
    {/* Hamburger menu */}
    <div className="flex items-center justify-center md:hidden">
      <button onClick={toggleMobileNav} className="mt-4">
        <RxHamburgerMenu size={30} />
      </button>
    </div>

    {/* Mobile nav */}
    <div className={`fixed inset-0 z-[100] transition-opacity duration-800 ${isOpen ? "bg-black/40 opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
      <div ref={navRef} className={`mobile-nav overflow-auto ${isOpen ? "open" : ""}`}>
        <div className="flex flex-col justify-center w-[95%] mx-auto py-2">
          {/* Close button */}
          <div>
            <button onClick={toggleMobileNav}>
              <Image src="/scissorsicon.svg" width={15} height={15} />
            </button>
          </div>

          <MobileNavContent state={isOpen} setState={setIsOpen}/>
        </div>
      </div>
    </div>
  </>
  )
}

export default MobileNav
