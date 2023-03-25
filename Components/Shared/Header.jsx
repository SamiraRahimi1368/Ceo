'use client'

import DesktopMenu from "./DesktopMenu"
import MobileMenu from "./MobileMenu"
import { useState } from "react"
import styled, { css } from 'styled-components';

const Header = ({ menuItems }) => {

   const [isOpen, setIsOpen] = useState(false)

   const toggleMenu = () => {
      setIsOpen(!isOpen)
   }

   const HoverShutterInButton = styled.button`
  background-color: blue;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  border-radius: 0.25rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0; /* Position the shutter effect at the left edge of the button */
    right: 0; /* Position the shutter effect at the right edge of the button */
    width: 0;
    height: 100%;
    background-color: white;
    transform-origin: center;
    transform: scaleX(0);
    transition: all 0.7s ease-in-out;
    z-index: 2; /* Set z-index to a higher value than the button */
  }
  
  &:hover:before {
    transform: scaleX(1);
    width: 100%; /* Expand the shutter effect to cover the entire button */
  }
  
  &:hover {
    color: black;
  }
`;
   return (



      <div className="header mx-auto  justify-between grid grid-cols-3 flex w-full	 mx-auto   ">


         <div className="nav flex flex-col mx-auto mt-4  ">
            <img src="images/heder-logo.png">
            </img>

         </div>
         <nav className="lg:-mt-4">
            <DesktopMenu menuItems={menuItems} />
            <div className="md:hidden">
               <button onClick={toggleMenu} className=" text-gray-500 hover:text-gray-700 focus:outline-none">

               </button>
            </div>
            <MobileMenu open={isOpen} />

         </nav>


         <div className="xl:mt-6 hidden lg:block flex flex-col mx-auto z-40">
            <HoverShutterInButton
               className="w-36 h-12 mr-32 ml-10 mt-1 rounded"
            >
               Sign Up
            </HoverShutterInButton>
         </div>
      </div >

   )


}

export default Header