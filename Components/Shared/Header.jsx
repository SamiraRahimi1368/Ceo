'use client'

import DesktopMenu from "./DesktopMenu"
import MobileMenu from "./MobileMenu"
import { useState } from "react"
const Header = () => {

   const [open, setOpen] = useState(false)

   const hamburger =
      <svg
         xmlns="http://www.w3.org/2000/svg"
         height="48"
         width="48"
         className=" md:block lg:hidden fill-white text-right"
      >
         <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" />
      </svg>
   return (
      <div className="header mx-auto  justify-between grid grid-cols-3 flex w-full	 mx-auto  "
      >


         <div className="nav flex flex-col mx-auto mt-4 ">
            <img src="images/heder-logo.png">
            </img>

         </div>
         <nav className="lg:-mt-4">
            <DesktopMenu />
            <MobileMenu open={open} name='samira'/>
         </nav>
          {/* <button className="cursor-pointer text-white "
            onClick={() => {
               setOpen(!open)
            }}
         >
            {
               hamburger
            }
         </button>  */}

         <div className="xl:mt-6 hidden lg:block flex flex-col mx-auto z-40">
            <button
               className="bg-blue-700 brightness-80 text-white hover:bg-white hover:text-blue-700 w-36 h-12 mr-32 ml-10 mt:1 rounded  font-bold hover:transition-all  rounded  xl:mt-2 z-0 lg:w-28 lg:-mr-28 lg:mt-6 "
            >
               Sign Up</button>
         </div>
      </div >

   )


}

export default Header