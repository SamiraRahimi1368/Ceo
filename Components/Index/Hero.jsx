'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Image from "next/image"
import styled, { css } from 'styled-components';

const HoverShutterInButton = styled.button`
background-color: purple;
color:white;
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
  transition: all 0.3s ease-in-out;
  z-index: 1; /* Make sure the shutter effect is above the button content */
}

&:hover:before {
  transform: scaleX(1);
  width: 100%; /* Expand the shutter effect to cover the entire button */

}

&:hover {

  color: red !important;
}
`;

const Hero = ({ supertitle,title,description }) => {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1000,
        });

    }, []);
   
    return <div
        className="hero flex flex-col items-center -mt-24 sm:-mt-24 xs:mt-24 h-auto  z-10 overflow-hidden"
        style={{ background: 'linear-gradient(to bottom, #a157e7, #00429b)' }}>
        <div className=" w-full h-auto px-4 lg:grid lg:grid-cols-2 lg:items-top lg:gap-12 lg:px-12 xl:px-20 max-w-screen-xl xl:mx-auto lg:mx-auto  lg:leading-4	">
            <div className='xl:mt-6'>

                <div>

                    <h1 className='font-rubik md:text-xl text-white lg:text-left lg:text-base	 font-bold sm:mt-48 sm:text-center sm:text-xl'>{supertitle}</h1>
                    <h2 className="font-nunito
                  text-slate-100 text-center lg:text-start  lg:text-5xl sm:text-3xl  font-bold lg:leading-[4rem]  sm:leading-[4rem] sm:leading-[2rem] lg:mt-9 md:mt-6 xs:pt-56 lg:mx-0 sm:mt-4 sm:ml-10 sm:mr-10 xs:text-3xl xs:mt-56 md:text-4xl " data-aos="fade-left" >{title}</h2>
                    <div className="sm: mt-3 mt-6 mx-0 text-white lg:text-base sm:text-lg sm:text-center lg:text-left font-catamaran leading-8  lg:text-start lg:mx-0 md:tex-center md:text-center text-slate-100 md:pt-6  md:text-lg sm:mt-2  sm:text-white  sm:leading-[2rem]" data-aos="fade-right">{description}</div>
                </div>



                <div className="flex gap-2 md:gap-4 sm:gap-2 lg:gap-2  mx-0 justify-center lg:justify-start md:mt-1 lg:pt-24 lg:pb-36 md:pt-12 sm:pt-16">


                    <HoverShutterInButton
                        className="w-40 h-12  rounded "
                    >
                        Lets Start
                    </HoverShutterInButton>

                    <HoverShutterInButton
                        className="w-40 h-12 bg-purple-500 text-white  rounded "
                    >
                        Contact US
                    </HoverShutterInButton>
                    <br />
                </div>
            </div>

            <div className="xl:mt-44 lg:mt-36 ml-16 w-full mx-auto mt-16 relative grid lg:grid-cols-6 md:grid-cols-12 aspect-video">

                <Image
                    priority
                    fill
                    src='/images/1.png'
                    className=" -ml-12 mt-24  object-cover lg:block md:hidden sm:hidden xs:hidden  " data-aos="zoom-in"

                    alt="home-font"
                    
                />
                <div className="w-16 h-20 relative object-cover ">
                    <Image

                        fill
                        src='/images/5.png'
                        className=" w-min lg:mt-6 lg:-ml-44 lg:block md:hidden sm:hidden xs:hidden " data-aos="zoom-in-up"

                        alt="home-font"

                    />
                </div>
                <Image
                    fill
                    className="object-cover  z-1 max-w-fit	mt-6 lg:ml-36 lg:block md:hidden sm:hidden xs:hidden  " data-aos="fade-up"
                    src='/images/2.png'
                    alt="home-font"

                />
                <div className="w-20 h-20 relative ">
                    <Image

                        fill
                        src='/images/8.png'
                        className=" w-min  lg:ml-56 lg:mt-12 xl:mt-2  lg:block md:hidden sm:hidden xs:hidden" data-aos="zoom-in-up"

                        alt="home-font"
                    />
                </div>

                <Image

                    fill
                    src='/images/3.png'
                    className="object-cover max-w-fit object-cover lg:-ml-28 mt-16 lg:block md:hidden sm:hidden xs:hidden" data-aos="fade-right"

                    alt="home-font"

                />
            </div>
           
        </div>
        <div className='relative w-full bg-center bg-no-repeat bg-repeat-x h-3 '
            style={{ backgroundImage: 'url(/images/wave-bg3.png)' }}>
        </div>
    </div>
    
}

export default Hero
