import Link from "next/link"

const Accessibility = () => {
  return (
    <main className='w-screen mt-[120px]'>
        <div className='flex flex-col container'>
            <h1 className='text-center mt-[60px]'>Accessibility Statement for Taylor-Made <span className='abrilh1'>Barber Shop</span></h1>
            <div className="flex flex-col gap-12 mt-[60px]">
                <p>At Taylor-Made Barber Shop, we pride ourselves on creating an inclusive and multicultural environment where everyone is welcome. Our commitment to diversity extends beyond the physical space of our barber shop to our online presence as well.</p>

                <p>Taylor-Made Barber Shop is dedicated to maintaining an accessible online presence as part of our commitment to inclusivity. We value the feedback of our community and welcome suggestions for improvement. If you encounter any accessibility barriers on our website, please contact us at <Link className="outline-black dark:outline-redprimary text-redprimary" href="mailto:accessibility@newgendigitalmedia.com">accessibility@newgendigitalmedia.com</Link> so that we can address the issue promptly.</p>

                <p>Thank you for being a part of the Taylor-Made Barber Shop community.</p>
            </div>
        </div>
    </main>
  )
}

export default Accessibility
