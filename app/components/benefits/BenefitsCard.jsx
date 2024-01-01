import { FaCircle } from "react-icons/fa";
import Image from "next/image";

const BenefitsCard = (props) => {
  return (
    <div className='w-full h-[250px] lg:h-[350px] bg-gradient-to-b from-[#DDDDDD] to-[#727171] dark:from-[#2B2828] dark:to-[#181717] flex flex-col items-center justify-start p-4 shadow-md shadow-redprimary/20 my-4 mx-2 min-w-[300px]'>
      <h4 className='dark:text-white text-center min-w-[100px]'>{props.header}</h4>
      <span className="py-4">
        <Image 
        src="/mustache.svg"
        height={20}
        width={50}
        alt=""
        />
      </span>
      <div className="flex flex-col justify-start">
        <div className='flex items-center'>
            <span className="text-redprimary p-2"><FaCircle /></span>
            <p className="text-white">{props.bulletone}</p>
        </div>
        <div className='flex items-center'>
            <span className="text-redprimary p-2"><FaCircle /></span>
            <p className="text-white">{props.bullettwo}</p>
        </div>
        <div className='flex items-center'>
            <span className="text-redprimary p-2"><FaCircle /></span>
            <p className="text-white">{props.bulletthree}</p>
        </div>
      </div>
    </div>
  )
}

export default BenefitsCard
