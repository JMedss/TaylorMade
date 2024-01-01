import CustomerForm from '@/app/components/booking/CustomerForm'
import React from 'react'

export const metadata = {
  title: 'Book Haircut',
  description: 'Find a barber for you! Any hair type. Any hair stlye. Experience the Taylor-Made difference today!',
}

const GVForm = ({ params }) => {
    const date = params.dateTime.slice(0, 10)
    const replaceSpace = params.dateTime.replace(/%20/g, " ")
    const formatted = replaceSpace.replace("%3A", ":")
    const time = formatted.slice(11)

  return (
    <main className='mt-[120px] min-h-screen w-screen flex justify-center items-center'>
        <CustomerForm date={date} time={time} />
    </main>
  )
}

export default GVForm