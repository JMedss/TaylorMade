"use client"
import Image from "next/image"
import FeaturesStars from "../features/FeaturesStars"
import { useRouter } from 'next/navigation'


const CTA = (props) => {
    const router = useRouter()


    const handleClick = (e) => {
        e.preventDefault()
        router.push(props.href)
      }
  return (
   <section className="bg-white dark:bg-darkprimary min-h-[800px] relative min-w-[300px] py-12">
        <div className="absolute bottom-[30%] left-0 z-0">
            <Image 
            className="opacity-30"
            src="/hand.png"
            width={750}
            height={800}
            alt=""
            />
        </div>
        <div className="container flex flex-col items-center min-w-[300px] z-10 min-h-full">
            <div className="header-wrapper flex flex-col items-center mt-[80px]">
                <div className="bg-redprimary h-[1px] w-full" />
               <h2 className="text-center mt-4">
               Are You Ready To See The Taylor-Made <span className="text-redprimary">Difference?</span>
               </h2>
               <div className="flex items-center">
                <div className="bg-redprimary h-[1px] w-[25vw]" />
                <FeaturesStars />
                <div className="bg-redprimary h-[1px] w-[25vw]" />
               </div>
            </div>
               <div className="words-wrapper flex flex-col items-center mt-[120px]">
                    <p className="text-center mb-[24px]">Great news! You no longer have to search best barbershop near me. It is time to take the next step towards your perfect haircut. </p>
                    <p className="text-center mb-[24px]">Do not miss out - secure your spot with our highly skilled barbers. Our appointments fill up quickly.</p>
                    <p className="text-center mb-[24px]">We can not wait to welcome you to our chair.</p>
               </div>
               <button
            className='bg-redprimary w-[60vw] max-w-[350px] text-white py-2 hover:bg-redprimary/80 transition-all outline-black dark:outline-white'
            onClick={handleClick}
            >
              {props.cta}
            </button>
            <div className="vid-wrapper z-10 mt-[15vh]">
              <video aria-label="A video of the owner of Taylor-Made Barber Shop speaking." className="border border-redprimary outline-black dark:outline-white shadow-lg shadow-black/80 dark:shadow-redprimary/50" controls={true}>
                <source src={props.src} type="video/mp4" />
              </video>
            </div>
        </div>
   </section>
  )
}

export default CTA
