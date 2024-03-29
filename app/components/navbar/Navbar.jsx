
import Icons from './Icons'
import Logo from './Logo'
import Nav from './Nav'
import NavButton from './NavButton'
import Link from 'next/link'

const Navbar = () => {
 
  return (
      <header className='bg-white dark:bg-[#1F1F1F] shadow-lg dark:shadow-black min-h-[130px] h-[15vh] fixed z-50 top-0 left-0 w-full flex flex-col'>
        <div className='w-full bg-redprimary flex items-center justify-center mb-1 md:mb-0'>
          <p className=' text-white text-[14px] sm:text-[14px]  md:text-[16px] lg:text-[18px]'>Taylor-Made Barber Shop is coming to ETSU. <Link className='underline' href="/etsuinfo">Learn More</Link></p>
        </div>
        <div className='container h-full flex items-center justify-between'> 
            <Logo />
          <div className='icons-btn-wrapper flex flex-col items-end gap-2'>
            <Icons />
            <span className='mobile-btn-wrapper md:hidden'>
              <NavButton />
            </span>
            <Nav />
          </div>
        </div>
        <div className='mobile-nav-wrapper container flex flex-col p-2 -mt-1 md:hidden'>
            <div className='bg-redprimary h-[1px] min-w-[300px]' />
            <nav className='w-full min-w-[300px]'>
              <ul className='flex justify-around items-center text-[14px] w-full'>
                <li>
                  <Link className='outline-black dark:outline-redprimary' href="/">Home</Link>
                </li>
                <li>
                  <Link className='outline-black dark:outline-redprimary' href="/locations">Locations</Link>
                </li>
              </ul>
            </nav>
            <div className='bg-redprimary h-[1px] min-w-[300px]' />
        </div>
      </header>
  )
} 

export default Navbar
