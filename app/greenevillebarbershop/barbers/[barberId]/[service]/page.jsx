import DateTimeCard from "@/app/components/booking/DateTimeCard"
import prisma from "@/app/libs/prismadb"

export const metadata = {
  title: 'Book Haircut',
  description: 'Find a barber for you! Any hair type. Any hair stlye. Experience the Taylor-Made difference today!',
}

const GVDate = async ({ params }) => {
  const durationBarberNameService = params.service
  const durationBarberNameServiceArray = durationBarberNameService.split("-")
  const unformattedBarberName = durationBarberNameServiceArray[1]
  const barberName = unformattedBarberName.replace(/%20/g, " ")
  const duration = parseInt(durationBarberNameServiceArray[0], 10)

  const barber = await prisma.barber.findMany({
    where: { name: barberName, location: "Greeneville" }
  })

  const appointments = await prisma.appointment.findMany({
    where: { barberId: barber[0].id }
})

const allTimes = [
  "9:00 AM", "9:30 AM" ,"10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", 
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", 
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", 
  "4:00 PM", "4:30 PM",
]

  return (
    <main className='mt-[120px] w-screen h-screen bg-white dark:bg-darkprimary flex justify-center items-center'>
        <DateTimeCard duration={duration} barber={barber[0]} appointments={appointments} times={allTimes}/>
    </main>
  )
}  

export default GVDate