"use client"
import { useRouter } from "next/navigation"

const ServiceList = (props) => {
    const router = useRouter()
    const services = props.services
    const barberName = props.barberName


    const handleServicePicked = (e, duration) => {
        const currentUrl = window.location.href
        const btnText = e.currentTarget.textContent
        const service = btnText.slice(9)
        const url = `${currentUrl}/${duration}-${barberName}-${service}`
        router.push(url)
    }
  return (
    <div className='flex flex-col items-center w-full'>
      {services && services.map((service) => (
        <button onClick={e => handleServicePicked(e, service.duration)} key={service.id} className='w-[250px] flex flex-col text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px] items-center hover:scale-105'>
            <div className='w-full flex justify-between'>
                <p className='text-redprimary'>${service.price}</p>
                <p className='text-redprimary'>{service.duration} Min</p>
            </div>
            {service.name}
            <div className='w-full h-[1px] bg-redprimary'/>
        </button>
      ))}
    </div>
  )
}

export default ServiceList
