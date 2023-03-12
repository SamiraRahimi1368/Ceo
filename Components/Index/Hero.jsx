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
        className="hero flex flex-col items-center -mt-24 "
        style={{ background: 'linear-gradient(to bottom, #a157e7, #00429b)' }}    >
        <div className=" w-full h-auto px-4 lg:grid lg:grid-cols-2 lg:items-top lg:gap-12 lg:px-12 xl:px-20 max-w-screen-xl xl:mx-auto lg:mx-auto">
            <div>
                <h1 className="text-white font-medium mt-28	">Welcome To Sceo
                </h1>
                <div className=" font-dosis text-slate-100 text-center lg:text-start  lg:text-5xl sm:text-3xl  font-bold lg:leading-[4rem]  sm:leading-[4rem] sm:leading-[2rem] lg:mt-12 md:mt-48 lg:mx-0 sm:mt-36 sm:ml-10 sm:mr-10 xs:text-3xl xs:mt-48" data-aos="fade-left">We Provide SEO Services For Agency</div>
                <div className="sm: mt-3 mt-6 mx-0 text-white lg:text-base sm:text-sm sm:text-center text-left font-catamaran leading-8  lg:text-start lg:mx-0 md:tex-right text-slate-100 md:text-md sm:text-white sm:pr-20 sm:leading-[2rem]" data-aos="fade-right">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates rerum odio, corrupti, culpa a rem itaque similique autem tempore voluptatibus.

                </div>
                <div className="flex gap-2 md:gap-4 sm:gap-2 lg:gap-2 lg:mt-12  mx-0 justify-center lg:justify-start md:mt-1">
                    <button className="bg-white text-text-slate-700 hover:bg-purple-500 hover:text-white w-40 h-12 rounded font-bold transition-colors duration-150  rounded focus:shadow-outline ">
                        Lets Start
                    </button>
                    <button className="bg-purple-500 text-white hover:bg-white font-bold hover:text-slate-700 w-40 h-12 rounded  transition-colors duration-150  rounded focus:shadow-outline ml-5">
                        Contact Us
                    </button>
                </div>
            </div>
            
            <div className="lg:mr-10 sm:mr-24  mt-16 sm:w-4/5 sm:mx-auto md:w-2/3 max-width-screen-lg  relative grid lg:grid-cols-6 md:grid-cols-12 gap-4 aspect-square">
           
                <Image
                    priority
                    fill
                    src='/images/1.png'
                    className="max-w-full mt-24 position-absolute " data-aos="zoom-in"

                    alt="home-font"
                />
                 <div className="w-16 h-20 relative object-cover ">
            <Image

                fill
                src='/images/5.png'
                className="block w-min lg:mt-6 lg:-ml-44"

                alt="home-font"
            />
        </div>
                <Image
                    fill
                    className="block  z-1 max-w-fit	mt-6 lg:ml-28  "data-aos="fade-up"
                    src='/images/2.png'
                    alt="home-font"
                />
                  <div className="w-20 h-20 relative ">
            <Image

                fill
                src='/images/8.png'
                className="block w-min  lg:ml-56 lg:mt-12 xl:mt-4 "

                alt="home-font"
            />
        </div>
                
                <Image

                    fill
                    src='/images/3.png'
                    className="block max-w-fit object-cover lg:-ml-32 mt-16 " data-aos="fade-right"

                    alt="home-font"
                />
            </div>
        </div>
        
    </div>
}

export default Hero