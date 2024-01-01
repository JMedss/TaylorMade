"use client"
import Link from "next/link"
import NavButton from "./NavButton"

const Nav = () => {
  return (
    <nav className="outline-black dark:outline-redprimary hidden md:flex">
        <ul className="flex justify-center items-center gap-4">
            <li>
                <Link className="outline-black dark:outline-redprimary" href="/">Home</Link>
            </li>
            <li>
                <Link className="outline-black dark:outline-redprimary" href="/locations">Locations</Link>
            </li>
            <li>
                <Link className="outline-black dark:outline-redprimary" href="/aboutus">About</Link>
            </li>
            <li>
                <NavButton />
            </li>
        </ul>
    </nav>
  )
}

export default Nav
