import React from 'react'
import BenefitsCard from './BenefitsCard'

const Benefits = () => {
  return (
    <section className='bg-[#F3F1F1] dark:bg-[#151414] pb-12'>
        <div className='flex flex-col container items-center'>
            <h2 className='my-[60px] text-center'>The Taylor-Made <span className='abrilh2'>Barber Shop</span> Experience</h2>
            <div className='flex flex-col items-center lg:flex-row '>
                <BenefitsCard header="Taylor-Made Experience" bulletone="Find the barber for your hair." bullettwo="Relax and enjoy the atmosphere." bulletthree="Leave with a personalized Taylor-Made experience." />
                <BenefitsCard header="Great, Quality Barbers" bulletone="Barbers that listen to your wants." bullettwo="Great community" bulletthree="Qaulity, professional haircuts" />
                <BenefitsCard header="Guaranteed Satisfaction" bulletone="Get the haircut you paid for." bullettwo="Leave with confidence." bulletthree="Impress the town." />
            </div>
        </div>
    </section>
  )
}

export default Benefits
