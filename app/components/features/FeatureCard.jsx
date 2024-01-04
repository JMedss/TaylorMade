import Link from "next/link"

const FeatureCard = (props) => {
  return (
    <div className='card-wrapper flex flex-col mb-[80px] gap-2'>
      <h4>{props.header}</h4>
      <p className='max-w-[500px] md:w-[60vw]'>{props.bfText} <span className='text-redprimary font-bold'><Link href={props.linkHref}>{props.redText}</Link></span> {props.afText}</p>
    </div>
  ) 
}

export default FeatureCard
 