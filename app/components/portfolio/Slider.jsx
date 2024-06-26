"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { FaLongArrowAltRight } from "react-icons/fa"
import { FaLongArrowAltLeft } from "react-icons/fa"
import { FaCircle } from "react-icons/fa"
import { FaDotCircle } from "react-icons/fa"


const Slider = (props) => {
  let [index, setIndex] = useState(0);
  
  const showNextImage = () => {
    setIndex(index === props.images.length - 1 ? 0 : index + 1)
  }

  const showPrevImage = () => {
    setIndex(index === 0 ? props.images.length - 1 : index - 1)
  }

  return (
    <div className='w-full h-full relative overflow-hidden'>
      <div className="w-full h-full flex overflow-hidden">
        {props.images.map(url => (
          <Image 
            style={{ translate: `${-100 * index}%` }}
            className="img-slider-img"
            key={url}
            src={url}
            alt="=Portfolio Image"
            width={1200}
            height={600}
            />
        ))}
        </div>
        <button aria-label="View previous image." onClick={showPrevImage} className="img-slider-button left-0"><FaLongArrowAltLeft /></button>
        <button aria-label="View next image." onClick={showNextImage} className="img-slider-button right-0"><FaLongArrowAltRight /></button>
            <div className="absolute bottom-[0.5rem] left-1/2 -translate-x-1/2 whitespace-nowrap flex gap-[0.25rem]">
              <div className="w-[150px] md:w-[200px] lg:w-[300px] flex overflow-hidden h-full pl-16 md:pl-24 relative">
              {props.images.map((_, i) => (
                <button style={{ translate: `${-100 * index}%` }}  aria-label={`View Image ${index}`} className="img-slider-dot-button" onClick={() => setIndex(i)} key={i}>{i === index ? <FaDotCircle /> : <FaCircle />}</button>
              ))}
            </div>
          </div>
    </div>
  )
}

export default Slider
