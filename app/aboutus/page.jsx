import Image from "next/image"
import { FaCircle } from "react-icons/fa";

const About = () => {
  return (
    <main className='mt-[120px] w-screen'>
        <div className='container flex flex-col items-center'>
            <h1 className="text-center mt-[60px]">About Taylor-Made <span className='abrilh1'>Barber Shop</span></h1>
            <div className='flex flex-col'>
              <h4>Our Mission</h4>
              <p>We aim to give high quality haircuts to anyone and create a
                 multi-cultural barber shop experience. We employ many barber of different ethnicities and specialties to ensure we have a barber for you.</p>
            </div>
            <div className='flex flex-col-reverse md:flex-row w-full mt-[60px] md:justify-between'>
              <Image 
              src="/aboutus.jpg"
              width={500}
              height={500}
              alt="The owner of Taylor-Made Barber Shop, Micah Taylor."
              />
              <div className="flex flex-col items-center">
                <h4 className="mb-4">The Story</h4>
                <div className="flex items-center p-4 max-w-[600px]">
                  <FaCircle size={20} className="text-redprimary"/>
                  <p className="pl-2">Taylor-Made Barber Shop in Johnson City, Tn was 
                    created by Micah Taylor in 2016. </p>
                </div>
                <div className="flex items-center p-4 max-w-[600px]">
                  <FaCircle size={20} className="text-redprimary"/>
                  <p className="pl-2">Micah was eventually able to open Taylor-Made Grooming Lounge in Greenville, Tn.</p>
                </div>
                <div className="flex items-center p-4 max-w-[600px]">
                  <FaCircle size={30} className="text-redprimary"/>
                  <p className="pl-2">Micah has been dedicated to creating a multi-cultural barber shop experience.Thank you for your support and loyalty.</p>
                </div>
              </div>
            </div>
        </div>
    </main>
  )
}

export default About
