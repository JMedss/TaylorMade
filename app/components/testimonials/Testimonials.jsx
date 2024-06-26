"use client"
import { useState, useEffect } from 'react';
import TestimonialStars from './TestimonialStars';

const Testimonials = (props) => {
  let [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === props.reviews[0].length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, props.reviews[0].length, props.reviews]);


  return (
    <section className="w-full h-[500px] lg:h-[600px] p-4 mt-24 text-center">
        <div className="container min-w-[300px]">
            <div className="flex flex-col items-center justify-around h-full"> 
                <h2 className='text-white mt-[60px] main'>What Our <span className="abrilh2">Clients</span> Are Saying:</h2>
                  <div className='flex flex-col items-center gap-2 mt-10'>
                    <h4 className='text-white'>{props.reviews[0][currentIndex].name}</h4>
                    <TestimonialStars />
                    <p className='max-w-[500px] text-center text-white'>
                      <span className='text-redprimary'>&quot;</span>
                        {props.reviews[0][currentIndex].review}
                      <span className='text-redprimary'>&quot;</span>
                    </p>
                  </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials
