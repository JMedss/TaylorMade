import BarberStars from "@/app/components/barbers/BarberStars"
import ServiceList from "@/app/components/services-page/ServiceList"
import prisma from "@/app/libs/prismadb"
import Image from "next/image"

export const metadata = {
    title: 'Book Haircut',
    description: 'Find a barber for you! Any hair type. Any hair stlye. Experience the Taylor-Made difference today!',
  }

const JCServices = async ({ params }) => {
    const unformattedBarberName = params.barberId
    const barberName = unformattedBarberName.replace(/%20/g, " ")

    const barber = await prisma.barber.findMany({
        where: { name: barberName, location: "Johnson City" }
    })

    const services = await prisma.service.findMany({
        where: { barberId: barber[0].id }
    })


  return (
    <main className='mt-[120px] w-screen min-h-[80vh] bg-white dark:bg-darkprimary flex justify-center items-center'>
        <div className='bg-gradient-to-b from-[#FFFFFF] to-[#636363] dark:from-[#2B2828] dark:to-[#181717] shadow-lg dark:shadow-redprimary/20 p-8 w-[40%] min-w-[300px] mt-[80px]'>
            <div className="flex flex-col items-center">
                <h1 className="text-center">Please Select A <span className="abrilh1">Service</span></h1>
                <div className="flex flex-col items-center mb-[24px]">
                    <Image 
                    src="/logotop.svg"
                    width={130}
                    height={100}
                    alt=""
                    />
                    <h4 className="mt-[-12px]">{barber[0].name}</h4>
                    <div className="flex items-center">
                        <div className="w-[20px] h-[1px] bg-redprimary" />
                            <BarberStars />
                        <div className="w-[20px] h-[1px] bg-redprimary" />
                    </div>
                </div>
                <ServiceList barberName={barber[0].name} services={services} />
            </div>
        </div>
    </main>
  )
}

export default JCServices
