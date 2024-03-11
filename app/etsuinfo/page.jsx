import React from 'react'

const ETSUINFO = () => {
  return (
    <main>
        <section className='mt-[120px] w-screen h-screen'>
            <div className='w-[80%] mx-auto flex flex-col items-center'>
                <h1 className='mt-[60px]'>ETSU INFO</h1>
                <p>Beginning February 2024, Taylor-Made Barber Shop has partnered with East Tennessee State University to guide young people. As of now, we will be in the Culp center every Monday giving haircuts, and advice to those who need it. Check back here for updates, as things may change. We will add more information as we know more. Thank you.</p>
                <div className='flex flex-col w-full md:flex-row md:items-center md:justify-around mt-10'>
                  <div className='flex items-center gap-2'>
                    <h3 className='text-redprimary'>Location:</h3>
                    <p>Mary V Jordan Multicultural Center</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <h3 className='text-redprimary'>Hours:</h3>
                    <p>Mondays, 2-7PM</p>
                  </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default ETSUINFO
