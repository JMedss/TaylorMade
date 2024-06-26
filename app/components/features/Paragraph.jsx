import React from 'react'
import Buttons from '../hero/Buttons'

const Paragraph = ({ header, content, text, link, extraClasses }) => {
  return (
    <div className={`${extraClasses} flex flex-col sm:items-center  w-full md:max-w-[400px] md:h-[600px] lg:h-[700px]`}>
            <h3 className='mb-1 sm:mb-3 sm:w-[400px] md:w-full'>{header}</h3>
            <p className='mb-2 sm:mb-6 sm:w-[400px] md:w-full'>{content}</p>
        <Buttons text={text} link={link} classes="border-redprimary text-redprimary mb-24 sm:w-[450px] md:w-full hover:bg-redprimary hover:text-[#FFFAFA] transition duration-1000 ease-in-out" />
    </div>
  )
}

export default Paragraph
