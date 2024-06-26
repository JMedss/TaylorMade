import React from 'react'

const Cookie = () => {
  return (
    <main className='mt-[120px]'>
        <section className='container flex flex-col items-center'>
            <h2 className='my-[60px] main'>Cookie Policy</h2>
            <div>
              <p>At Taylor-Made, your privacy is of utmost importance to us. We are committed to protecting and respecting your personal information. This Cookie Policy outlines how we collect, use, and protect your data.</p>
              <h4 className='mt-12'>What are Cookies?</h4>
              <p>Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work or work more efficiently, as well as to provide information to the site’s owners.</p>
              <h4 className='mt-12'>How We Use Cookies</h4>
              <p>We use Google Analytics cookies on our website to collect data about how our visitors use the site. These cookies help us understand, for instance, if you have visited our website before, how long you stay on our site, and which pages are the most popular. This helps us improve our website and your browsing experience.</p>
              <h4 className='mt-12'>Your Choice and Control</h4>
              <p>When you first visit our website, you will be prompted with a cookie consent banner. You have the choice to either accept or deny the use of cookies.</p>
        
                <ul className='w-[80%] m-auto my-10'>
                    <li><p><span className='text-redprimary font-bold'>Accept:</span> If you accept, we will use Google Analytics cookies to gather data as mentioned above.</p></li>
                    <li><p><span className='text-redprimary font-bold'>Deny:</span> If you deny, we will not track any data via Google Analytics cookies. However, essential cookies required for the website to function will still be used</p></li>
                </ul>
              <p>By using our services, you consent to the practices outlined in this Cookie Policy. We may update this policy from time to time to reflect changes in our practices or for legal reasons. Please check this page periodically for updates.</p>
              <br />
              <p>Thank you for trusting Taylor-Made Barber Shop & Taylor-Made Grooming Lounge with your personal information. We value your privacy and are dedicated to ensuring your data is treated with the utmost care and respect.</p>
            </div>
        </section>
    </main>
  )
}

export default Cookie
