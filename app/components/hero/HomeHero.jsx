import PrimaryBtn from "../PrimaryBtn"
import SecondaryBtn from "../SecondaryBtn"
import Image from "next/image"



const Hero = () => {
  

  return (
    <section className="bg-hero-light dark:bg-hero-dark bg-white dark:bg-darkprimary w-full bg-no-repeat bg-cover min-h-[110vh] md:min-h-[90vh] mt-[120px] min-w-[300px] z-10">
   <div className="container flex flex-col items-center gap-10 md:flex-row min-w-[300px]">
      <div className="header-wrapper flex flex-col mt-10 md:mt-[100px] w-full items-center justify-center md:items-start">
          <h1><span className="subtitle">Taylor-Made Barber Shop</span><br />
          Get A TaylorMade Haircut At A <span className="abrilh1">Barber Shop</span> Near You.
          </h1>
          <p className="subheader">First-class haircuts. <span className="text-redprimary font-bold">Any hairstyle.</span> We have a barber for you.</p>
          <div className="btn-wrapper flex my-4 items-center max-w-[400px] gap-2">
            <PrimaryBtn />
          </div> 
          <span className="testimonal-wrapper testimonial">
            <p>
              <span className="text-redprimary">"</span>
               The barbers listen to and execute your needs, and are skilled with ANY type of hair.
              <span className="text-redprimary">"</span>
            </p>
          </span>
      </div>
      <div className="right-col-wrapper flex flex-col md:hidden">
        <div className="barber-image-wrapper flex justify-center items-center relative min-w-[300px]">
          <Image 
          src="/micahtaylor.png"
          height={300}
          width={300}
          alt="The owner of Taylor-Made Barber Shop standing behind a barber chair"
          priority
          />
          <div className="barberchair-wrapper absolute left-3 bottom-[-45px]">
          <Image 
          src="/barberchair.png"
          height={100}
          width={230}
          alt="A barber chair."
          priority
          />
          </div>
        </div>
      </div>
      <div className="hidden right-col-wrapper md:flex">
        <div className="barber-image-wrapper flex justify-center items-center relative min-w-[300px]">
          <Image 
          src="/micahtaylor.png"
          height={300}
          width={500}
          alt="The owner of Taylor-Made Barber Shop standing behind a barber chair"
          priority
          />
          <div className="barberchair-wrapper absolute  bottom-[-60px]">
          <Image 
          src="/barberchair.png"
          height={100}
          width={250}
          alt="A barber chair."
          priority
          />
          </div>
        </div>
      </div>
   </div>
   </section>
  )
}

export default Hero
