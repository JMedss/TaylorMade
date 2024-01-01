import React from 'react'
import Slider from './Slider'

const Portfolio = (props) => {
    
    const images = props.images
    
 
  return (
    <section className='min-w-[300px] bg-white dark:bg-darkprimary p-4'>
        <div className='flex flex-col items-start container'>
            <h2 className='mt-[120px]'>The <span className='abrilh2'>Barbers</span> At Work</h2>
            <div className='slider-wrapper w-full'>
                <Slider images={[images]} />
            </div>
        </div>
    </section>
  )
}

export default Portfolio
