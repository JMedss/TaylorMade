import Image from "next/image"
import Desktop from "./Desktop"
import Mobile from "./Mobile"


const Features = (props) => {


  return (
    <section className='bg-[#FFFAFA] w-screen min-w-[300px] pt-[120px] md:pt-[150px] overflow-hidden'>
      {/* Mobile  */}
        <Mobile />

      {/* Desktop */}
      <div className="hidden md:flex flex-col container relative">
        <Desktop />
        <Image 
              className="absolute left-1/2 top-[500px] z-0 transform -translate-x-1/2 -translate-y-1/2 mix-blend-luminosity opacity-80"
              src="/neckduster.png"
              alt="Neck Duster"
              width={300}
              height={300}
            />
      </div>
    </section>
  )
}

export default Features
