"use client" 
import { useEffect, useState } from "react"


import React from 'react'

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [prevSlide, setPrevSlide] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setPrevSlide(currentSlide);
        setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
      }, 3000); // Change slide every 3 seconds
  
      return () => clearInterval(interval);
    }, [currentSlide])

  return (
    <div className="bg-[#FFFAFA]/70 shadow-xl shadow-black p-6 lg:p-8 w-[80%] min-w-[300px] max-w-[1200px] h-[200px] lg:h-[225px] absolute z-10 top-1/2 left-1/2 transfrom -translate-x-1/2 -translate-y-1/2 flex-flex-col items-center justify-center">
        <div className="slider">
            <div className={`slide ${currentSlide === 0 ? "active" : prevSlide === 0 ? "exit" : ""}`}>
                <h2 className="main m-auto w-[600px] lg:w-[700px]">FEEL THE <span className="font-abril-fatface text-redprimary md:text-[46px] lg:text-[52px]">ATMOSPHERE</span> WHEN YOU WALK IN.</h2>
            </div>
            <div className={`slide ${currentSlide === 1 ? "active" : prevSlide === 1 ? "exit" : ""}`}>
                <h2 className="main m-auto w-[550px] lg:w-[700px]">FIND THE RIGHT BARBER FOR YOUR <span className="font-abril-fatface text-redprimary md:text-[46px] lg:text-[52px]">HAIR STYLE.</span></h2>
            </div>
            <div className={`slide ${currentSlide === 2 ? "active" : prevSlide === 2 ? "exit" : ""}`}>
                <h2 className="main m-auto w-[600px] lg:w-[700px]">BOOK ONLINE TO <span className="font-abril-fatface text-redprimary md:text-[46px] lg:text-[52px]">SAVE TIME</span> AT THE BARBER SHOP.</h2>
            </div>
        </div>
        <div className="flex items-center gap-1 w-full justify-center">
            <div className={`dot ${currentSlide === 0 ? "active" : ""}`} />
            <div className={`dot ${currentSlide === 1 ? "active" : ""}`} />
            <div className={`dot ${currentSlide === 2 ? "active" : ""}`} />
        </div>
  </div>
  )
}

export default Slider
