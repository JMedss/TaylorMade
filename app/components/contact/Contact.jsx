import GoogleMap from "./GoogleMap"

const Contact = (props) => {
    const position = props.position
    let url = props.url
  return (
    <section className="bg-white dark:bg-darkprimary py-[120px]">
        <div className="flex-col items-center container max-w-[1000px]">
            <div className="flex flex-col items-center">
                <h4>Come See Us!</h4>
                <p className="text-center">{props.addr}</p>
                <div className="bg-redprimary h-[1px] w-full mb-4" />
                <span><p>Monday: {props.hours}</p></span>
                <span><p>Tuesday: {props.hours}</p></span>
                <span><p>Wednesday: {props.hours}</p></span>
                <span><p>Thursday: {props.hours}</p></span>
                <span><p>Friday: {props.hours}</p></span>
                <span><p>Saturday: {props.hours}</p></span>
                <button href={props.href} className="text-white bg-redprimary hover:bg-redprimary/80 transition-all w-[40%] max-w-[200px] md:max-w-[300px] p-1 md:p-2 mt-4 mb-[60px] font-bold outline-black dark:outline-white">BOOK HAIRCUT</button>
            </div>
            <GoogleMap position={position} url={url} />
        </div>
    </section>
  )
}

export default Contact
