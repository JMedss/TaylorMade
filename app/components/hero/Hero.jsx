
import Image from "next/image"
import Buttons from "./Buttons"
import RC from "./RC"

const Hero = (props) => {
    const urls = props.urls
   
  return (
    <section className='bg-hero-light dark:bg-hero-dark bg-white dark:bg-darkprimary w-full bg-no-repeat bg-cover min-h-[110vh] md:min-h-[90vh] mt-[120px] min-w-[300px] z-10'>
        <div className="container flex flex-col items-center gap-10 md:flex-row min-w-[300px]">
            <div className="header-wrapper flex flex-col mt-10 md:mt-[100px] w-full items-center justify-center md:items-start">
                <h1><span className="subtitle">{props.subtitle}</span><br />
                    Get The Taylor-Made Experience at {props.city} Freshest <span className="abrilh1">Barber Shop</span>
                </h1>
                <p className="subheader">First-class haircuts. <span className="text-redprimary font-bold">Any hairstyle.</span> We have a barber for you.</p>
                <div className="btn-wrapper flex my-4 items-center max-w-[400px] gap-2">
                    <Buttons urls={urls}/>
                </div>
                <span className="testimonal-wrapper testimonial">
                    <p> 
                        <span className="text-redprimary">&quot;</span>
                            The barbers listen to and execute your needs, and are skilled with ANY type of hair.
                        <span className="text-redprimary">&quot;</span>
                    </p>
                </span>
            </div> 
        <RC barbers={props.barbers} />
    </div>
</section>
  )
}

export default Hero
