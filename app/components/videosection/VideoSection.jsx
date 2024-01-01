"use client"
import { useTheme } from "next-themes"
import Qaulity from "./Qaulity"
import Mobile from "./Mobile"
import Desktop from "./Desktop"




const VideoSection = () => {
 

  return (
    <section className="min-h-[850px] flex items-center justify-center">
        <Mobile />
        <Desktop />
        <div>
          <Qaulity />
        </div>
    </section>
  )
}

export default VideoSection
