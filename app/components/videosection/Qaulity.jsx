import React from 'react'
import QaulityCard from './QaulityCard'

const Qaulity = () => {
  return (
    <div className='outer-box shadow-md dark:shadow-redprimary/20 bg-[#F3F1F1] dark:bg-darkprimary'>
      <div className='flex flex-col items-center justify-center md:flex-row md:w-screen md:justify-around md:items-start'>
        <QaulityCard header="Quality Cuts" text="Custom cuts, fades, trims, dreads, & more." decor="Leave Satisfied." />
        <QaulityCard header="Quality Culture" text="Feel the atmosphere when you walk in." decor="Leave Refreshed." />
        <QaulityCard header="Quality Barbers" text="Meet our friendly, experienced barbers." decor="Leave Impressed." />
      </div>
    </div>
  )
}

export default Qaulity
 