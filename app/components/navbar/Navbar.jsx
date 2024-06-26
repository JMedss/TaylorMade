
import BackToTop from './BackToTop'
import Mobile from '../videosection/Mobile'
import Logo from './Logo'
import MobileNav from './MobileNav'
import Nav from './Nav'
import NavButton from './NavButton'
import Link from 'next/link'

const Navbar = () => {
 
  return (
      <header className='fixed top-0 left-0  w-full min-w-[300px] z-50'>
        <div className='container py-2'>
            <div className='flex items-center justify-between'>
              <Logo />
              <BackToTop />
              <MobileNav />
              <Nav />
            </div>
        </div>
        <hr className='border-t-2 border-redprimary container absolute bottom-0 left-1/2 -translate-x-1/2 z-30' />
      </header>
  )
} 

export default Navbar
