"use client"
import Image from 'next/image'
import ThemeSwitch from '../ThemeSwitch'
import { useTheme } from 'next-themes'
import Link from 'next/link'

const Icons = () => {
    const { theme, setTheme } = useTheme()

  return (
    <div className='flex items-center justify-center gap-3 min-w-[150px]'>
      <span className='flex items-center justify-center gap-3'>
        <ThemeSwitch />
        <Image
        src="/verticalborder.svg"
        width={2}
        height={20}
        alt=""
        priority
        />
      </span>
      <span className='flex items-center justify-center gap-3'>
        <Link className='outline-black dark:outline-redprimary' href="tel:+11231231234">
            <Image
            src={theme === "dark" ? "/darkphone.svg" : "/lightphone.svg"}
            height={10}
            width={30}
            alt='Click to get in contact via telephone'
            priority
            />
        </Link>
            <Image
        src="/verticalborder.svg"
        width={2}
        height={20}
        alt=""
        priority
        />
      </span>
      <span className='flex items-center justify-center gap-3'>
        <Link className='outline-black dark:outline-redprimary' href="mailto:taylormade2017@gmail.com">
            <Image
            src={theme === "dark" ? "/darkemail.svg" : "/lightemail.svg"}
            height={10}
            width={30}
            alt='Click to get in contact via email'
            priority
            />
        </Link>
            <Image
        className='hidden md:flex'
        src="/verticalborder.svg"
        width={2}
        height={20}
        alt=""
        priority
        />
      </span>
      <span className='hidden md:flex items-center justify-center gap-3'>
        <Link className='outline-black dark:outline-redprimary' href="/tracker">
            <p className='text-[16px]'>
                Tracker
            </p>
        </Link>
        <Image
        src="/verticalborder.svg"
        width={2}
        height={20}
        alt=""
        priority
        />
        <Link className='outline-black dark:outline-redprimary' href="/cancel-appointment">
            <p className='text-[16px]'>
                Cancel Appointment
            </p>
        </Link>
      </span>
    </div>
  )
}

export default Icons
