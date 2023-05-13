'use client'

import DesktopMenu from "./DesktopMenu"
import MobileMenu from "./MobileMenu"
import { useState } from "react"

const Header = ({ menuItems }) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }
    return (


<<<<<<< HEAD
      <div className="header lg:mx-auto  justify-between flex flex w-full	 items-center px-4">

         <div className="nav flex flex-col lg:mx-auto mt-4 lg:pr-36 xl:pr-56 2xl:pr-9 ">
            <img src="images/heder-logo.png">
            </img>
=======
        <div className="header lg:mx-auto mr-9 justify-between flex flex-cols-3 flex w-full	 items-center px-4">

            <div className="nav flex flex-col lg:mx-auto mt-4 ">
                <img src="images/heder-logo.png">
                </img>
>>>>>>> 59b7df897e4f4154a8ffe555fc7a3dc0ecc1cdae

            </div>
            <nav className=" hidden lg:block lg:-mt-4 ">
                <DesktopMenu menuItems={menuItems} />

            </nav>
            <div className="lg:hidden">
                <button
                    className="w-8 h-8 text-white rounded-md flex items-center justify-center focus:outline-none
                z-10
                focus:outline-none
                "
                    onClick={() => toggleMenu()}
                >
                    {isOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-white right-0 mr-4 absolute   transition: transform 0.3s ease-in-out;
        "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                s stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 absolute right-0 mr-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
                <MobileMenu open={isOpen} />

            </div>

            <div className="xl:mt-6 lg:mt-6 hidden lg:block flex flex-col mx-auto z-40">
                <button className="shutter bg-blue-800 relative px-4 py-2 rounded text-white  hover:text-blue-800 overflow-hidden z-10 group">
                    <span>Sign Up</span>
                    <span className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] w-full z-50 group-hover:text-purple-900 transition">Sign Up</span>
                </button>
            </div>

        </div >

    )


}

export default Header
