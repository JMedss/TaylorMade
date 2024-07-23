
import Mobile from "./Mobile"
import Slider from "./Slider"





const VideoSection = () => {


  return (
    <div className="">
      <section className="hidden md:flex bg-black/0 h-[900px]">
        <div className="fixed top-52 -z-10 w-screen h-screen">
          <video autoPlay muted loop playsInline className='w-screen h-[850px] object-cover relative'>
            <source type="video/mp4" src="/taylormadebarbershop.mp4" />
          </video>
          <Slider />
        </div>
      </section>
      <section className="bg-[#FFFAFA] md:hidden">
          <Mobile />
      </section>
    </div>
  )
}

export default VideoSection
