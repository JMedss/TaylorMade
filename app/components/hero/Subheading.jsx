"use client"
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const Subheading = () => {
    const [subheading, setSubheading] = useState("")
    const pathname = usePathname()

    useEffect(() => {
        if (pathname === "/") {
            setSubheading("The Multicultural Barber Shop")
        } else if (pathname === "/johnsoncitybarbershop") {
            setSubheading("Johnson Cities Multicultural Barber Shop")
        } else if (pathname === "/greenevillebarbershop") {
            setSubheading("Greeneville's Multicultural Barber Shop")
        }
    }, [pathname])

  return (
    <h2 className="subheading">{subheading}</h2>
  )
}

export default Subheading
