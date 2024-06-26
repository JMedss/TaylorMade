"use client"
import { useState, useEffect } from "react"


const NoBarbers = (props) => {
    const [noBarbers, setNoBarbers] = useState(true)
    const barbers = props.barbers
    const location = props.location
    useEffect(() => {
        if (barbers.length > 0) {
          const filteredBarbers = barbers.filter(barber => barber.location === location)
          if (filteredBarbers) {
            setNoBarbers(false)
          }
        }
    }, [barbers, location, noBarbers])
    console.log(noBarbers)
  return (
    <div className={`${noBarbers ? "flex" : "hidden"} h-full w-full items-center justify-center bg-[#FFFAFA]`}>
      <h3 className='my-[300px]'>No Barbers Added Yet</h3>
    </div>
  )
}

export default NoBarbers
