'use client'

import DesktopMenu from "./DesktopMenu"
import MobileMenu from "./MobileMenu"
import { useState } from "react"

const Header = ({ menuItems }) => {

   const [isOpen, setIsOpen] = useState(false)

   const toggleMenu = () => {
      setIsOpen(!isOpen)
   }
   return (


      <div className="header mx-auto mr-9 justify-between flex flex-cols-3 flex w-full	 mx-auto     ">


         <div className="nav flex flex-col mx-auto mt-4 ">
            <img src="images/heder-logo.png">
            </img>

         </div>
         <nav className="lg:-mt-4 ">
            <DesktopMenu menuItems={menuItems} />
            <div className="md:block">
               <button onClick={toggleMenu} className=" text-gray-500 hover:text-gray-700 focus:outline-none">

               </button>
            </div>
            <MobileMenu open={isOpen} />

         </nav>


         <div className="xl:mt-6 lg:mt-6 hidden lg:block flex flex-col mx-auto z-40">
            <button class="shutter bg-blue-800 relative px-4 py-2 rounded text-white  hover:text-blue-800 overflow-hidden z-10 group">
               <span>Sign Up</span>
               <span class="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] w-full z-50 group-hover:text-purple-900 transition">Sign Up</span>
            </button>
         </div>

      </div >

   )


}

export default Header