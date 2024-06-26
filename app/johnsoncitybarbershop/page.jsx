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
  title: 'Johnson City Barber Shop',
  description: 'A barber shop for everyone. Receive a multi-cultural experience at Taylor-Made Barber Shop. An hair style. Our Johnson City barber shop ensures you leave feeling confident and stylish. Experience the Taylor-Made difference today!',
}




const JohnsonCityBarberShop = () => {

  

  const images = ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg", "/img5.jpg", "/img6.jpg", "/img7.jpg", "/img8.jpg", "/img9.jpg", "/img10.jpg", "/img11.jpg", "/img12.jpg", "/img13.jpg", "/img14.jpg", "/img15.jpg", "/img16.jpg", "/img17.jpg", "/img18.jpg", "/img19.jpg", "/img20.jpg"]
  
  const jcReviews = [
    { id: 1, name: "Doug Williams Jr", review: "Hands down the best shop in the city. Coming from Houston, Ive visited several different shops since moving to JC. Without question the best in the city. Everyone is extremely personable and welcoming. You can tell the owner really cares about his employees. Not a single bad thing to say about the experience" },
    { id: 2, name: "Michael Henebry", review: "The barbershop itself is excellent with great services and prices.  I have had my haircut by many of the staff there and have been pleased every time.  Kelamy is amazing, both professional and skilled.  I would recommend anyone to go here for their hairstyling needs." },
    { id: 3, name: "Shelli Fields", review: "Will ALWAYS take my son here. The atmosphere is warm and welcoming from the time you walk in. The barbers listen to and execute your needs, and are skilled with ANY type of hair. Plus, the owner genuinely cares about his clients and community! Definitely reccomend!" },
    { id: 4, name: "Miranda Russell", review: "Love this barber shop and the people here!! The best atmosphere! Kids are so comfortable. Adults feel heard. And everyone leaves looking amazing!!" },
    { id: 5, name: "Jaylon Wells", review: "Best Barber Shop in the area by far!! Great with my son, Super nice staff, and great atmosphere!! You cant go wrong by going here!" }
  ]

  const questions = [
    {id: 1, question: "How long is the typical wait for a hair cut?", answer: "Our typical wait time for a haircut varies, but to enhance your experience, book online or call ahead to save time!"},
    {id: 2, question: "What services does your barber shop offer?", answer: "At Taylor-Made Barber Shop, our services cater to a wide range of grooming needs, and the specifics may vary based on the individual expertise of each barber. However, collectively, our skilled team covers just about everything you might be looking for. "},
    {id: 3, question: "What is the average cost of a haircut at your barber shop?", answer: "Each barber sets their own pricing based on factors such as the complexity of the cut, time required, and their level of experience. "},
    {id: 4, question: "Can I book appointments online?", answer: "Booking appointments at Taylor-Made Barber Shop is made simple and convenient through our online platform. "},
    {id: 5, question: "How long does a typical haircut appointment take?", answer: "The duration of a typical haircut appointment at Taylor-Made Barber Shop can vary based on the complexity of the requested style and individual preferences. On average, appointments generally range from 30 to 60 minutes. "}
  ]

  const urls = ["/johnsoncitybarbershop/barbers", "#barbers"]
  const position = { lat: 36.307668592033124,  lng: -82.36358271584787}
  const url = 'https://www.google.com/maps/place/Taylor+Made+Barber+Shop/@36.3074886,-82.3660843,17z/data=!3m1!4b1!4m6!3m5!1s0x885a7ce9729da85d:0xa2abf7aa028eb7fa!8m2!3d36.3074886!4d-82.3635094!16s%2Fg%2F11gb3r8j9r?entry=ttu'
  const addr = "817 West Walnut St. Suite #7 Johnson City, TN 37604"
  const hours = "10AM-5PM"

  return (
    <main> 
      <Hero />
      <VideoSection />
      <Features />   
      <BarbersMain location="Johnson City"/> 
      <div className="flex flex-col w-screen blue-gradient">
        <Portfolio images={images}/>
        <Testimonials reviews={[jcReviews]} />
      </div>
      <FAQ questions={[questions]} />
      <CTA  cta="BOOK HAIRCUT" href="/johnsoncitybarbershop/barbers" src="/ctavideo.mp4"/> 
      <Contact position={position} url={url} addr={addr} hours={hours} href="/johnsoncitybarbershop/barbers" />
    </main>
  )
}

export default JohnsonCityBarberShop
