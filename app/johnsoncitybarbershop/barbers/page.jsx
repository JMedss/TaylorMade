import BarbersMain from "@/app/components/barbers/Barbers"

export const metadata = {
  title: 'Johnson City Barbers',
  description: 'Find a barber for you! Any hair type. Any hair stlye. Experience the Taylor-Made difference today!',
}


const JCBarbers = () => {

 

  return (
    <main className='mt-[120px] bg-white dark:bg-darkprimary'>
      <BarbersMain location="Johnson City" />
    </main>
  )
}

export default JCBarbers
