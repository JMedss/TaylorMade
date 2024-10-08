"use client"
import { useState, useEffect } from 'react'
import NoBarbers from './NoBarbers'
import BarberSection from './BarberSection'



const BarbersMain = (props) => {
  const [barbers, setBarbers] = useState([])
  const location = props.location

  async function getBarbers() {
    const res = await fetch('/api/getBarbers', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }, 
      cache: 'no-store'
    })

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    const data = await res.json()
    setBarbers(data)
  }

  useEffect(() => {
    getBarbers()
  }, [])




  return (
    <section id='barbers' className='bg-[#FFFAFA] dark:bg-darkprimary w-screen h-full relative pb-48'>
        <NoBarbers barbers={barbers} location={location}/>
        <BarberSection barbers={barbers} location={location} />
    </section>
  )
}

export default BarbersMain
