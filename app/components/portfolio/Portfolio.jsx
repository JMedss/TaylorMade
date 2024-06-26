import React from 'react'
import Slider from './Slider'

const Portfolio = (props) => {
    
    const images = props.images
    
 
  return (
    <section className='min-w-[300px] p-4'>
        <div className='flex flex-col items-center container gap-16'>
            <h2 className='pt-[120px] text-[#FFFAFA] main text-center'>The Barbers At Work</h2>
            <div className='w-full h-[250px] sm:h-[300px] md:h-[450px] lg:h-[500px] xl:h-[600px]'>
                <Slider images={images} />
            </div> 
        </div>
    </section> 
  )
}

export default Portfolio
