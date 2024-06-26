import BarbersMain from "../components/barbers/Barbers"
import Benefits from "../components/benefits/Benefits"
import Contact from "../components/contact/Contact"
import CTA from "../components/cta/CTA"
import Features from "../components/features/Features"
import FAQ from "../components/freqaskquest/FAQ"
import Hero from "../components/hero/Hero"
import Portfolio from "../components/portfolio/Portfolio"
import Testimonials from "../components/testimonials/Testimonials"
import VideoSection from "../components/videosection/VideoSection" 

export const metadata = {
  title: 'Greeneville Barber Shop',
  description: 'A barber shop for everyone. Receive a multi-cultural experience at Taylor-Made Grooming Lounge. An hair style. Our Greeneville barber shop ensures you leave feeling confident and stylish. Experience the Taylor-Made difference today!',
}

const Greeneville = () => {


 
      const images = ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg", "/img5.jpg", "/img6.jpg", "/img7.jpg", "/img8.jpg", "/img9.jpg", "/img10.jpg", "/img11.jpg", "/img12.jpg", "/img13.jpg", "/img14.jpg", "/img15.jpg", "/img16.jpg", "/img17.jpg", "/img18.jpg", "/img19.jpg", "/img20.jpg"]

  
      const questions = [
        {id: 1, question: "How long is the typical wait for a hair cut?", answer: "Our typical wait time for a haircut varies, but to enhance your convenience, we have implemented a real-time tracker system."},
        {id: 2, question: "What services does your barber shop offer?", answer: "At Taylor-Made Barber Shop, our services cater to a wide range of grooming needs, and the specifics may vary based on the individual expertise of each barber. However, collectively, our skilled team covers just about everything you might be looking for. "},
        {id: 3, question: "What is the average cost of a haircut at your barber shop?", answer: "Each barber sets their own pricing based on factors such as the complexity of the cut, time required, and their level of experience. "},
        {id: 4, question: "Can I book appointments online?", answer: "Booking appointments at Taylor-Made Barber Shop is made simple and convenient through our online platform. "},
        {id: 5, question: "How long does a typical haircut appointment take?", answer: "The duration of a typical haircut appointment at Taylor-Made Barber Shop can vary based on the complexity of the requested style and individual preferences. On average, appointments generally range from 30 to 60 minutes. "}
      ]

  const gvReviews = [
        { id: 1, name: "Felissa Hale", review: "From the moment you walk in the door you are greeted and you feel welcomed. VERY professional and comfortable atmosphere. GREAT place for all types of cuts for men, women and children! 5 STARS HANDS DOWN! Go check them out, you will come out with a smile" },
        { id: 2, name: "Davion Woodman", review: "this is the best barber shop in town with the top-notch barbers. They have the best conversations in the highest skill sets Ive seen in barbershops.  And they treat you like family." },
        { id: 3, name: "Keith Sanchez", review: "Hands down the best barbershop experience in my 36 years, great customer care, and the owner Micah actually takes care of all his customers on and off the clock! Definitely recommend both locations!!!" },
        { id: 4, name: "Jessica Robbins", review: "We’ve always had a great experience at TaylorMade. Toddler haircuts arent easy but they are always very patient and kind. My little guy always leaves looking sharp. It does not hurt that it is next to Creamy Cup either" },
        { id: 5, name: "Nic Bristol", review: "The environment of the barbershop is electric. With a great soon as you walk through the door. With experienced barbers In each chair." }
      ]

      const urls = ["/greenevillebarbershop/barbers", "#barbers",]
      const position = { lat: 36.17538818194584,  lng: -82.76079714616584} 
      const url = 'https://www.google.com/maps/place/TaylorMade+Grooming+Lounge/@36.175215,-82.7633935,17z/data=!3m1!4b1!4m6!3m5!1s0x885a4f81672037cb:0xb2c46c18a6645907!8m2!3d36.175215!4d-82.7608186!16s%2Fg%2F11fvh3j4cc?entry=ttu'
      const addr = "907 Erwin Hwy, Tusculum, TN 37745"
      const hours = "9AM-5PM"


  return (
    <main> 
    <Hero />
    <VideoSection />
    <Features cta="BOOK HAIRCUT" href="/greenevillebarbershop/barbers" location="greeneville"/> 
    <BarbersMain location="Greeneville"/>
    <div className="flex flex-col w-screen blue-gradient">
    <Portfolio images={images}/>
    <Testimonials reviews={[gvReviews]} />
    </div>
    <FAQ questions={[questions]} />
    <CTA  cta="BOOK HAIRCUT" href="/greenevillebarbershop/barbers" src="/ctagroominglounge.mp4"/>
    <Contact position={position} url={url} addr={addr} hours={hours} href="/greenevillebarbershop/barbers"/>
  </main>
  )
}

export default Greeneville
