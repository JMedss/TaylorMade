"use client"
import Image from "next/image"
import { useState, useEffect } from "react"


const RC = (props) => {



  return (
    <>
        <div className="right-col-wrapper flex flex-col md:hidden">
            <div className="barber-image-wrapper flex justify-center items-center relative min-w-[300px]">
                <Image 
                src="/micahtaylor.png"
                height={100}
                width={300}
                alt="The owner of Taylor-Made Barber Shop standing behind a barber chair"
                priority
                />
                <div className="barberchair-wrapper absolute left-4 bottom-[-45px]">
                    <Image 
                    src="/barberchair.png"
                    height={100}
                    width={230}
                    alt="A barber chair."
                    priority
                    />
                </div>
            </div>
        </div>
        <div className="hidden right-col-wrapper md:flex">
            <div className="barber-image-wrapper flex justify-center items-center relative min-w-[300px]">
                <Image 
                src="/micahtaylor.png"
                height={100}
                width={400}
                alt="The owner of Taylor-Made Barber Shop standing behind a barber chair"
                priority
                />
                <div className="barberchair-wrapper absolute bottom-[-60px]">
                    <Image 
                    src="/barberchair.png"
                    height={100}
                    width={250}
                    alt="A barber chair."
                    priority
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default RC
