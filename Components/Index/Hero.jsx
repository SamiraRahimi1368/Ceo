'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Image from "next/image"
import styled, { css } from 'styled-components';

const Hero = ({ supertitle, title, description }) => {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1000,
        });

    }, []);

    return <div
        className="hero flex flex-col items-center -mt-24 sm:-mt-36 xs:mt-24 lg:h-auto z-10 overflow-hidden"
        style={{ background: 'linear-gradient(to bottom, #a157e7, #00429b)' }}>
        <div className=" w-full sm:h-96 md:h-96 lg:h-auto px-4 lg:grid lg:grid-cols-2 lg:items-top lg:gap-12 lg:px-12 xl:px-20 max-w-screen-xl xl:mx-auto lg:mx-auto  lg:leading-4	">
            <div className='xl:mt-6'>

                <div>

                    <h1 className='font-rubik md:text-xl text-white lg:text-left lg:text-base	md:mt-24 font-bold sm:mt-48 sm:text-center sm:text-xl'>{supertitle}</h1>
                    <h2 className="font-nunito
                  text-slate-100 text-center lg:text-start  lg:text-5xl sm:text-3xl  font-bold lg:leading-[4rem]  sm:leading-[4rem] sm:leading-[2rem] lg:mt-9 md:mt-6 xs:pt-56 lg:mx-0 sm:mt-4 sm:ml-10 sm:mr-10 xs:text-3xl xs:mt-56 md:text-4xl " data-aos="fade-left" >{title}</h2>
                    <div className="sm: mt-3 mt-6 mx-0 text-white lg:text-base sm:text-lg sm:text-center lg:text-left font-catamaran leading-8  lg:text-start lg:mx-0 md:tex-center md:text-center text-slate-100 md:pt-6  md:text-lg sm:mt-2  sm:text-white  sm:leading-[2rem]" data-aos="fade-right">{description}</div>
                </div>



                <div className="flex gap-2 md:gap-4 sm:gap-2 lg:gap-2  mx-0 justify-center lg:justify-start md:mt-1 lg:pt-24 lg:pb-36 md:pt-12 sm:pt-16">


                    <button class="w-32 h-12 shutter hover:bg-purple-500  bg-white relative px-4 py-2 rounded text-gray-900 hover:text-purple-900  overflow-hidden z-10 group font-base">
                        <span>Let's start</span>
                        <span class=" absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] w-full z-50 group-hover:text-purple-900 transition">Let's start</span>
                    </button>
                    <button class="shutter bg-purple-500 relative px-4 py-2 rounded text-white  hover:text-purple-900 overflow-hidden z-10 group">
                        <span>Contact Now</span>
                        <span class="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] w-full z-50 group-hover:text-purple-900 transition font-base">Contact Now</span>
                    </button>
                   
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
