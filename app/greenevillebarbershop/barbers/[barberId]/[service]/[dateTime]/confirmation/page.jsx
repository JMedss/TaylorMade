import React from 'react'

export const metadata = {
  title: 'Confirmation',
}

const GVConfirmation = () => {
  return (
    <main className='mt-[120px] w-screen h-screen'>
        <div className='container flex flex-col'>
            <h2 className='text-redprimary mt-[80px]'>Your appointment has been successfully requested.</h2>
            <p className='font-bold mb-2'>Thank you for booking your appointment with us!</p>
            <p className='mb-2'>An email confirmation with your appointment details is on its way. If you provided your phone number, expect a text message, confirming or denying your appointment, otherwise you will recieve an email.</p>
            <p>Do not forget to check your spam if you have not recieved an email! Thank you for booking with Taylor-Made.</p>
        </div>
    </main>
  )
}

export default GVConfirmation
