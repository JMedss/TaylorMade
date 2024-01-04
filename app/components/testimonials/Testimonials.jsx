"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FeaturesStars from '../features/FeaturesStars';
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
    <section className="bg-[#151414] w-full h-[500px] p-4">
        <div className="container min-w-[300px]">
            <div className="flex flex-col items-center justify-around h-full"> 
                <h2 className='text-white text-center mt-[60px]'>What Our <span className="abrilh2">Clients</span> Are Saying:</h2>
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
