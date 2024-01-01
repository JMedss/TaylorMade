import React from 'react'
import prisma from '@/app/libs/prismadb'
import NoBarbers from './NoBarbers'
import BarberSection from './BarberSection'


const BarbersMain = async (props) => {
    const location = props.location
    const barbers = await prisma.barber.findMany({
        where: {
            location: location
        }
    })

  return (
    <section id='barbers' className='bg-white dark:bg-darkprimary w-screen h-full relative'>
        <NoBarbers barbers={barbers} />
        <BarberSection barbers={barbers} location={location}/>
    </section>
  )
}

export default BarbersMain
