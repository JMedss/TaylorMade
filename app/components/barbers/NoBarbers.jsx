"use client"
import { useState, useEffect } from "react"


const NoBarbers = (props) => {
    const [noBarbers, setNoBarbers] = useState(true)
    const barbers = props.barbers

    useEffect(() => {
        if (barbers.length > 0) {
            setNoBarbers(false)
        }
    }, [])

  return (
    <div className={`${noBarbers ? "flex" : "hidden"} h-full w-full items-center justify-center`}>
      <h2 className='my-[300px]'>No Barbers Added Yet</h2>
    </div>
  )
}

export default NoBarbers
