
import Image from "next/image"
import HeadersnParagraphs from "./HeadersnParagraphs"



const CTA = () => {



  return (
   <section className="bg-[#FFFAFA]  w-screen relative pt-[150px] md:pt-[200px] overflow-hidden">
        <Image 
        className="absolute top-48 right-0 object-cover opacity-60"
          src="/straightblade.png"
          alt="Straight razor"
          width={800}
          height={100}
        />
        <div className="relative z-10">
          <HeadersnParagraphs />
        </div>
   </section>
  )
}

export default CTA
