"use client"
import Paragraph from "./Paragraph"
import MobileImage from "./MobileImage"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"



const Mobile = () => {
      // Get path to get CTA text and link
      const path = usePathname()
      const [ctas, setCtas] = useState({
          textOne: "",
          linkOne: "",
          textTwo: "",
          linkTwo: ""
      })
      
      useEffect(() => {
          const checkPath = () => {
              const jcExists = path.indexOf("johnsoncitybarbershop")
              const gvExists = path.indexOf("greenevillebarbershop")
  
              if(jcExists !== -1) {
                  setCtas({
                      textOne: "FIND A BARBER",
                      linkOne: "/johnsoncitybarbershop#barbers",
                      textTwo: "FRESHEN UP",
                      linkTwo: "/johnsoncitybarbershop/barbers"
                  })
              } else if(gvExists !== -1) {
                  setCtas({
                      textOne: "FIND A BARBER",
                      linkOne: "/greenevillebarbershop#barbers",
                      textTwo: "FRESHEN UP",
                      linkTwo: "/greenevillebarbershop/barbers"
                  })
              } else {
                  setCtas({
                      textOne: "VIEW LOCATIONS",
                      linkOne: "/locations",
                      textTwo: "VIEW LOCATIONS",
                      linkTwo: "/locations"
                  })
              }
          }
          // Check path on mount
          checkPath()
  
  
      }, [path])
  return (
    <div className="relative container md:hidden">
    <div className="relative z-10 w-full">
      <div className="flex flex-col sm:items-center gap-2 mb-72 w-full">
        <h2 className="main w-[100px] sm:w-[350px]">QUALITY HAIRCUTS, QUALITY CULTURE, QUALITY PEOPLE.</h2>
        <h3 className="subheading max-w-[350px]">Find Consistency with The Taylor-Made Experience</h3>
      </div>
      <Paragraph header="A barber for any hair type." content="We have multiple barbers that specialize in many hair styles. Make sure you check out our different barbers and find the right barber for you." text={ctas.textOne} link={ctas.linkOne} />
      <Paragraph header="More than a haircut." content="Our barbers listen to the needs of each client. Our services go beyond great haircuts you can be proud of; it is also about providing an experience tailored to you. Come visit us today – leave refreshed, leave energized, and leave satisfied." text={ctas.textTwo} link={ctas.linkTwo} />
    </div>
    <MobileImage />
  </div>
  )
}

export default Mobile
