import Image from "next/image"

const RightColumn = () => {
  return (
    <>
    <div className="right-col-wrapper flex flex-col md:hidden">
    <div className="barber-image-wrapper flex justify-center items-center relative min-w-[300px]">
      <Image 
      src="/lady.png"
      height={100}
      width={125}
      alt="The owner of Taylor-Made Barber Shop standing behind a barber chair"
      priority
      />
      <div className="barberchair-wrapper absolute left-4 bottom-[-40px]">
      <Image 
      src="/barberchair.png"
      height={100}
      width={175}
      alt="A barber chair."
      priority
      />
      </div>
    </div>
  </div>
  <div className="hidden right-col-wrapper md:flex">
    <div className="barber-image-wrapper flex justify-center items-center relative min-w-[300px]">
      <Image 
      src="/lady.png"
      height={100}
      width={175}
      alt="The owner of Taylor-Made Barber Shop standing behind a barber chair"
      priority
      />
      <div className="barberchair-wrapper absolute left-[-40px] bottom-[-60px]">
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
        </>
  )
}

export default RightColumn
