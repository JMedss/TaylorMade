import Link from "next/link"


const Privacy = () => {
  return (
    <main className='mt-[120px] w-screen h-[180vh]'>
        <section className='container flex flex-col items-center h-full'>
            <h2 className='my-[60px]'>Privacy Policy</h2>
            <div className='flex flex-col h-full'>
              <p>At Taylor-Made, your privacy is of utmost importance to us. We are committed to protecting and respecting your personal information. This Privacy Policy outlines how we collect, use, and protect your data.</p>
              <h4 className='mt-12'>Information We Collect and Use</h4>
              <p>We collect and use your personal information primarily to manage and update your appointments. We may also use your information to send you relevant updates and promotions.</p>
              <h4 className='mt-12'>Third-Party Partnerships</h4>
              <p>We have partnered with <Link href="https://www.newgendigitalmedia.com" className="text-redprimary">NewGen Digital Media</Link> to provide our website and booking software. Your information may be stored and processed by NewGen Digital Media solely for the purpose of providing these services. </p>
              <h4 className='mt-12'>Data Security</h4>
              <p>We employ security measures to safeguard your information from unauthorized access, disclosure, alteration, or destruction. Your data is stored on our servers and those of our trusted partners.</p>
              <h4 className='mt-12'>Your Rights</h4>
              <p>You have the right to access, rectify, or delete your personal information at any time. If you have questions or concerns about your data, please contact us at <Link href="tel:+14234805884"></Link>423-480-5884.</p>
             <br />
              <p>By using our services, you consent to the practices outlined in this Privacy Policy. We may update this policy from time to time to reflect changes in our practices or for legal reasons. Please check this page periodically for updates.</p>
              <br />
              <p>Thank you for trusting Taylor-Made Barber Shop & Taylor-Made Grooming Lounge with your personal information. We value your privacy and are dedicated to ensuring your data is treated with the utmost care and respect.</p>
            </div>
        </section>
    </main>
  )
}

export default Privacy
