import Image from "next/image"

const FAQ = (props) => {
    let questions = props.questions[0]
  return (
    <section className='bg-white dark:bg-darkprimary relative min-h-[150vh] py-[120px]'>
        <div className='img-wrapper absolute z-10 top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden lg:block'>
            <Image 
            src="/barbertools.png"
            height={1000}
            width={2000}
            alt=""
            />
        </div>
        <div className="container flex flex-col items-center">
            <h2 className="text-center z-20 mb-[120px]">The <span className="abrilh2 z-20">Barber Shop's</span> Frequently Asked Questions</h2>
            <div className="card-wrapper w-[100%] m-auto bg-black/50 shadow-lg flex flex-col py-12 px-6 lg:relative lg:z-20 lg:w-[60%]">
                {questions.map((question) => (
                    <div key={question.id} className="flex flex-col gap-4">
                        <h4 className="text-[16px] sm:text-[16px] md:text-[20px] lg:text-[24px]">{question.question}</h4>
                        <p className="text-white md:text-[16px]">{question.answer}</p>
                    <div className="bg-redprimary h-[1px] w-full my-4" />
                    </div>
                ))}
            </div>
        </div>
    </section> 
  )
}

export default FAQ
