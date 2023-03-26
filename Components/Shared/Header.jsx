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
   .btn-holder {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50% , -50%);
   }
   .simple-btn {
      text-decoration: none;
      font-size: 1rem;
      display: inline-block;
      position: relative;
      transition: all .4s ease;
      text-align: center;
      line-height: 60px;
      width: 120px;
      border-radius: 5px;
      height: 50px;
      color: white;
      z-index: 1;
     overflow: hidden;
     background-color:#2154f2;
     padding-bottom:10px;
   }
   .simple-btn:before,
   .simple-btn:after {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      height: 0%;
      width: 100%;
      z-index: -1;
      background-color: #a157e7;
      opacity: 0;
      transition: all .4s ease-in;
   }
   .simple-btn:after {
      bottom: 0;
      top: inherit;

   }
   .simple-btn:hover:before,
   .simple-btn:hover:after {
      height: 50%;
      opacity: 1;

   }
   .simple-btn:hover {
      box-shadow: 0 3px 7px rgba(0,0,0,.14)

   }
`;
   return (


      <div className="header mx-auto mr-9 justify-between flex flex-cols-3 flex w-full	 mx-auto   ">


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
            <HoverShutterInButton className="font-rubik "
            >
               <a href="https://youtu.be/7RviKhuax-E" class="simple-btn" target="_blank">Sign Up</a>
            </HoverShutterInButton>
         </div>

      </div >

   )


}

export default Header