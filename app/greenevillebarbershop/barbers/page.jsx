import BarbersMain from "@/app/components/barbers/Barbers"

export const metadata = {
  title: 'Greeneville Barbers',
  description: 'Find a barber for you! Any hair type. Any hair stlye. Experience the Taylor-Made difference today!',
}



const GVBarbers = () => {



  return (
    <main className='mt-[120px] bg-white dark:bg-darkprimary'>
      <BarbersMain location="Greeneville" />
    </main>
  )
}

export default GVBarbers
