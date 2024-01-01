import Image from "next/image"
import Stars from "./Stars"

const QaulityCard = (props) => {
  return (
    <div className='card-wrapper flex flex-col justify-center items-center p-6'>
        <h2 className='alternative'>{props.header}</h2>
        <p className="text-center my-2 max-w-[200px]">{props.text}</p>
        <div className="flex ml-[-10px] flex-row items-center justify-center">
          <Image 
          src="/logotop.svg"
          width={100}
          height={50}
          alt=""
          priority
          />
        </div>
        <p className="mb-1">{props.decor}</p>
        <div className="flex items-center justify-center">
            <div className="bg-redprimary h-[1px] w-[15px]" />
            <Stars />
            <div className="bg-redprimary h-[1px] w-[15px]" />
        </div>
    </div>
  ) 
}

export default QaulityCard
