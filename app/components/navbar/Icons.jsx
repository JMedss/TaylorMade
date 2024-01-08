"use client"
import Image from 'next/image'
import ThemeSwitch from '../ThemeSwitch'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { FaPhoneAlt } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"

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
            <FaPhoneAlt />
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
           <AiOutlineMail size={20} />
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
    </div>
  )
}

export default Icons
