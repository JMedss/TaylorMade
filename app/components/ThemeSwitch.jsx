"use client"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    
    useEffect(() => setMounted(true), [])

    if(!mounted) {
      return null
    }
 
  return (
   <button aria-label="light dark theme" className="bg-redprimary text-white dark:text-blueprimary p-[6px] rounded-full outline-black dark:outline-redprimary" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
    {theme === "dark" ? <MdDarkMode alt="" /> : <CiLight alt=""/>}
   </button>
  )
}

export default ThemeSwitch
