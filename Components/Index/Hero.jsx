'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Image from "next/image"

const Hero = () => {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1000,
        });

    }, []);
    return <div
        className="hero flex flex-col items-center -mt-24 sm:-mt-24 xs:mt-24 h-auto z-10 overflow-hidden"
        style={{ background: 'linear-gradient(to bottom, #a157e7, #00429b)' }}    >



        <div className=" w-full h-auto px-4 lg:grid lg:grid-cols-2 lg:items-top lg:gap-12 lg:px-12 xl:px-20 max-w-screen-xl xl:mx-auto lg:mx-auto  lg:leading-4	">
            <div className='xl:mt-6'>
                <h1 className='font-sans md:text-xl text-white text-lg font-bold sm:mt-48 sm:text-center sm:text-xl'>Welcome To Sceo
                </h1>
                <div className=" font-mono
 text-slate-100 text-center lg:text-start  lg:text-5xl sm:text-3xl  font-bold lg:leading-[4rem]  sm:leading-[4rem] sm:leading-[2rem] lg:mt-12 md:mt-6 xs:pt-56 lg:mx-0 sm:mt-4 sm:ml-10 sm:mr-10 xs:text-3xl xs:mt-56 md:text-4xl " data-aos="fade-left">We Provide SEO Services For Agency</div>
                <div className="sm: mt-3 mt-6 mx-0 text-white lg:text-base sm:text-lg sm:text-center lg:text-left font-catamaran leading-8  lg:text-start lg:mx-0 md:tex-center md:text-center text-slate-100 md:pt-6  md:text-lg sm:mt-2  sm:text-white  sm:leading-[2rem]" data-aos="fade-right">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates rerum odio, corrupti, culpa a rem itaque similique autem tempore voluptatibus.
                <div className="flex gap-2 md:gap-4 sm:gap-2 lg:gap-2  mx-0 justify-center lg:justify-start md:mt-1 lg:pt-24 lg:pb-12 md:pt-12 sm:pt-16">
                    
                <button className="bg-white text-purple-700 hover:bg-purple-500 hover:text-white w-40 h-12 rounded font-bold transition-colors duration-150  rounded focus:shadow-outline ">
                            Lets Start
                        </button>
                        <button className="bg-purple-500 text-white hover:bg-white font-bold hover:text-slate-700 w-40 h-12 rounded  transition-colors duration-150  rounded focus:shadow-outline ml-5 ">
                            Contact Us
                        </button>
                        <br/>

                </div>
                
                    </div>
             
               
            </div>

            <div className="lg:mr-10 xl:mt-44 sm:mr-24  mt-16 sm:w-4/5 sm:mx-auto md:w-2/3 max-width-screen-xl  relative grid lg:grid-cols-6 md:grid-cols-12 gap-4 aspect-square">

                <Image
                    priority
                    fill
                    src='/images/1.png'
                    className="max-w-full mt-24 position-absolute lg:block md:hidden sm:hidden xs:hidden " data-aos="zoom-in"

                    alt="home-font"
                />
                <div className="w-16 h-20 relative object-cover ">
                    <Image

                        fill
                        src='/images/5.png'
                        className=" w-min lg:mt-6 lg:-ml-44 lg:block md:hidden sm:hidden xs:hidden" data-aos="zoom-in-up"

                        alt="home-font"
                    />
                </div>
                <Image
                    fill
                    className="  z-1 max-w-fit	mt-6 lg:ml-28 lg:block md:hidden sm:hidden xs:hidden " data-aos="fade-up"
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
                    className=" max-w-fit object-cover lg:-ml-28 mt-16 lg:block md:hidden sm:hidden xs:hidden" data-aos="fade-right"

                    alt="home-font"
                />
            </div>
        </div>

    </div>
}

export default Hero