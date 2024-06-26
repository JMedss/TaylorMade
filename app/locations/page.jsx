
import LocationCard from '../components/locations/LocationCard'


export const metadata = {
  title: 'Taylor-Made Locations',
  description: 'A barber shop for everyone. Receive a multi-cultural experience at Taylor-Made Barber Shop. Our expert barbers cater to all hair types, ensuring you leave feeling confident and stylish. Find a Taylor-Made Barber Shop near you!',
}

const Locations = () => {
  return (
    <section className='bg-[#FFFAFA] w-full min-h-[90vh] mt-[120px] min-w-[300px] z-10'>
      <div className='container min-w-[300px] flex flex-col gap-6 items-center'>
        <h1 className='my-[60px]'>Taylor-Made Locations</h1>
        <LocationCard name="Taylor-Made Barber Shop" address="817 West Walnut St. Suite #7 Johnson City, TN 37604" img="/newlogo.svg" size={50} alt="Taylor-Made Barber Shop Logo" href="/johnsoncitybarbershop" minwidth="min-w-[75px]" /> 
        <LocationCard name="Taylor-Made Grooming Lounge" address="907 Erwin Hwy, Tusculum, TN 37745" img="/groomingloungedarklogo.png" size={200} alt="Taylor-Made Grooming Lounge Logo" href="/greenevillebarbershop" minwidth="min-w-[50px]" /> 
      </div>
    </section>
  )
}

export default Locations
