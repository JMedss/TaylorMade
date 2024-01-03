"use client"
import { useState, useEffect } from 'react'
import NoBarbers from './NoBarbers'
import BarberSection from './BarberSection'



const BarbersMain = (props) => {
  const [barbers, setBarbers] = useState([])
  const location = props.location

  async function getBarbers() {
    const res = await fetch('http://taylormade.com/api/getBarbers', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }, 
      cache: 'no-store'
    })

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    console.log("fetching data")
    const data = await res.json()
    setBarbers(data)
  }

  useEffect(() => {
    getBarbers()
  }, [])

  console.log(barbers)


  return (
    <section id='barbers' className='bg-white dark:bg-darkprimary w-screen h-full relative'>
        <NoBarbers barbers={barbers} />
        <BarberSection barbers={barbers} location={location} />
    </section>
  )
}

export default BarbersMain
