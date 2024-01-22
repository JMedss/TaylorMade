"use client"
import SubHeading from './SubHeading'
import FeatureCard from './FeatureCard'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Features = (props) => {
  const router = useRouter()
  const location = props.location
  const handleClick = (e) => {
    e.preventDefault()
    router.push(props.href)
  } 

  return (
    <section className='bg-white dark:bg-darkprimary bg-features-light dark:bg-features-dark bg-cover h-full min-w-[300px] py-[80px] md:py-[120px]'>
        <div className='container flex flex-col justify-center items-center min-w-[300px] relative'>
          <div className='absolute bottom-[125px] md:right-0 md:top-[50%] xl:translate-x-[-50%] z-0'>
            <Image
            className='opacity-30 lg:opacity-100 dark:bg-blend-soft-light'
            src="/neckduster.png"
            width={300}
            height={300}
            alt="A barber's neck duster"
            />
          </div>
            <h2 className='text-center md:text-left'>Are you tired of searching best <span className='abrilh2'>Barber Shop</span> near me to be let down? </h2>
            <SubHeading />
            <div className='flex flex-col items-center md:items-start my-[120px] z-20 w-full'>
                <FeatureCard linkHref={`/${location}barbershop/barbers`} header="Get the haircut you paid for." bfText="We have all been there. Disappointed after getting a new haircut. Our barbers are" redText="true masters" afText="of their craft. This will be the last time you have to search best barber shop near me!" />
                <FeatureCard linkHref={`/${location}barbershop/barbers`} header="A barber for any hair type." bfText="We have multiple barbers that specialize in many hairstyles and types. Make sure you check out our different barbers to" redText="find the right barber" afText="for you." />
            </div>
            <button
            className='bg-redprimary w-[60vw] max-w-[350px] text-white py-2 hover:bg-redprimary/80 transition-all outline-black dark:outline-white'
            onClick={handleClick}
            >
              {props.cta}
            </button>
        </div>
    </section>
  )
}

export default Features
