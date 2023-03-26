'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Image from "next/image"
import styled, { css } from 'styled-components';

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
    width: 160px;
    border-radius: 5px;
    height: 50px;
    color: black;
    z-index: 1;
   overflow: hidden;
   background-color:white;
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

const Hero = ({ supertitle, title, description }) => {
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


                    <HoverShutterInButton className="font-rubik ">
                        <a href="https://youtu.be/7RviKhuax-E" class="simple-btn" target="_blank">Let's start</a>
                    </HoverShutterInButton>
                    <HoverShutterInButton className="font-rubik ml-6 ">
                        <a href="https://youtu.be/7RviKhuax-E" class="simple-btn" target="_blank">Contact Us</a>
                    </HoverShutterInButton>
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
