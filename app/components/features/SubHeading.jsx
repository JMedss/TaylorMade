
import Image from "next/image"
import FeaturesStars from "./FeaturesStars"



const SubHeading = () => {


  return (
    <div className='flex flex-col items-center justify-center my-[40px] md:my-[60px]'>
          <Image 
          className="ml-[-15px]"
          src="/logotop.svg"
          width={275}
          height={50}
          alt=""
          priority
          />
          <h3 className="text-center max-w-[400px] md:max-w-[500px]">Find consistency with the Taylor-Made <span className="abrilh3">Experience</span></h3>
        <div className="flex justify-center items-center">
            <div className="bg-redprimary h-[1px] w-[45px]" />
            <FeaturesStars />
            <div className="bg-redprimary h-[1px] w-[45px]" />    
        </div>
    </div>
  )
}

export default SubHeading
