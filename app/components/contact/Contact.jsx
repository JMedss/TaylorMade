"use client"
import { useState, useEffect } from "react"
import GoogleMap from "./GoogleMap"
import Buttons from "../hero/Buttons"
import { usePathname } from "next/navigation"


const Contact = (props) => {
    const position = props.position
    let url = props.url
    const path = usePathname()
    const [cta, setCta] = useState({
        text: "",
        link: ""
    })
    useEffect(() => {
      const checkPath = () => {
      if(path === "/") {
        setCta({
          text: "VIEW LOCATIONS",
          link: "/locations"
        })
      } else if (path === "/johnsoncitybarbershop") {
        setCta({
          text: "FRESHEN UP",
          link: "/johnsoncitybarbershop/barbers"
        })
      } else if (path === "/greenevillebarbershop") {
        setCta({
          text: "FRESHEN UP",
          link: "/greenevillebarbershop/barbers"
        })
      }
    }
    checkPath()

    }, [path])

  return (
    <section className="bg-[#FFFAFA] py-[120px]">
        <div className="flex-col items-center container">
            <div className="flex flex-col items-center">
                <h3 className="main my-2">Come Vibe With Us!</h3>
                <p className="text-center">{props.addr}</p>
                <div className="bg-redprimary h-[1px] w-full mb-4" />
                <div className="flex flex-col">
                  <span><p>Monday: {props.hours}</p></span>
                  <span><p>Tuesday: {props.hours}</p></span>
                  <span><p>Wednesday: {props.hours}</p></span>
                  <span><p>Thursday: {props.hours}</p></span>
                  <span><p>Friday: {props.hours}</p></span>
                  <span><p>Saturday: {props.hours}</p></span>
                </div>
                <Buttons text={cta.text} link={cta.link} classes="border-redprimary text-redprimary my-12 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] hover:bg-redprimary hover:text-[#FFFAFA] transition duration-1000 ease-in-out"/>
            </div>
            <div className="w-full flex justify-center">
             <GoogleMap position={position} url={url} />
            </div>
        </div>
    </section>
  )
}

export default Contact
