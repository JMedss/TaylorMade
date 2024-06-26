import CTAS from "./CTAS"
import Images from "./Images"
import Subheading from "./Subheading"

const Hero = () => {
    
   
  return (
    <section className='bg-[#FFFAFA] mt-hero overflow-x-hidden'>
        <div className="relative flex flex-col items-center justify-end container min-h-[900px]">
          <Images />
          {/* Mobile Headers and CTAs */}
          <div className="flex flex-col gap-8 md:hidden">
              <div className="flex flex-col">
                <h1>A BARBER FOR ANY HAIR STYLE.</h1>
              <Subheading />
              </div>
              <CTAS />
          </div>

          {/* Desktop Headers and CTAs */}
          <div className="hidden md:flex flex-col absolute left-0 top-1/2 transform -translate-y-1/2  w-[300px] lg:w-[350px]">
              <hr className="border-1 mb-4 border-black w-[290px] lg:w-[350px]"/>
              <h1 className="hidden md:flex">A BARBER FOR ANY HAIR STYLE.</h1>
              <Subheading />
          </div>
          <div className="hidden md:flex items-center mb-[120px]">
            <CTAS />
          </div>
        </div>
    </section>
  )
}

export default Hero
