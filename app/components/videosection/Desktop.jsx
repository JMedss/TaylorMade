import React from 'react'

const Desktop = () => {
  return (
    <div className='hidden md:flex absolute top-[120px] -z-50 min-w-[300px]'>
      <video autoPlay muted loop playsInline>
          <source type="video/mp4" src="/taylormadebarbershop.mp4" />
        </video>
    </div>
  )
}

export default Desktop
