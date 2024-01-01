"use client"
import { useState, useEffect } from "react"
import Image from "next/image"


const Slider = (props) => {
    let [currentIndex, setCurrentIndex] = useState(0)


    useEffect(() => {
        const intervalId = setInterval(() => {
          // Increment the currentIndex and wrap around to 0 if it exceeds the last index
          setCurrentIndex((prevIndex) => (prevIndex + 1) % props.images[0][0].length);
        }, 5000); // Adjust the interval based on your requirements
    
        // Clear the interval to avoid memory leaks when the component unmounts
        return () => clearInterval(intervalId);
      }, [currentIndex, props.images[0][0].length]);


    
    
  return (
    <div className='w-full bg-[#F3F1F1] dark:bg-[#151414] flex justify-center items-center gap-2 shadow-inner shadow-redprimary/40 p-2 overflow-x-scroll md:overflow-x-hidden mb-[60px]'>
            <Image 
            src={props.images[0][0][currentIndex].imgOne}
            width={200}
            height={200}
            alt="A slider of recent haircut images"
            />
       
            <Image 
            src={props.images[0][0][currentIndex].imgTwo}
            width={200}
            height={200}
            alt=""
            />
     
    
            <Image 
            src={props.images[0][0][currentIndex].imgThree}
            width={200}
            height={200}
            alt=""
            />
  
            <Image 
            src={props.images[0][0][currentIndex].imgFour}
            width={200}
            height={200}
            alt=""
            />
            <Image 
            src={props.images[0][0][currentIndex].imgFive}
            width={200}
            height={200}
            alt=""
            />
        
    </div>
  )
}

export default Slider
