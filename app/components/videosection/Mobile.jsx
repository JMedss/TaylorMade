"use client"
import { useTheme } from "next-themes"
import Qaulity from "./Qaulity"


const Mobile = () => {
const { theme, setTheme } = useTheme()

  return (
    <div className='md:hidden absolute top-[120px] -z-50 min-w-[300px]'>
      <video autoPlay muted loop playsInline className="relative">
          <source type="video/mp4" src={theme === "light" ? "/taylormadelightmode.mp4" : "/taylormadedarkmode.mp4" } />
        </video>
        <div className="absolute inset-0 bg-[#F3F1F1]/70 dark:bg-darkprimary/70" />
    </div>
  )
}

export default Mobile
