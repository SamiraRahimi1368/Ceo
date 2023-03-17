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
        className="hero flex flex-col items-center -mt-24 sm:-mt-24 xs:mt-24  h-auto z-10 overflow-hidden md:bg-slate-100 sm:bg-slate-100 xs:bg-slate-100 " data-aos="fade-up"
    >



        <div
            className=" w-full h-auto px-4 lg:grid lg:grid-cols-2 lg:items-top lg:gap-12 lg:px-12 xl:px-20 max-w-screen-xl xl:mx-auto lg:mx-auto  lg:leading-4	">
            <div className='xl:mt-6'>
                <h1 className='font-sans md:text-xl text-gray-700 underline	lg:mt-12 md:mt-6 sm:mt-6 lg:text-left text-lg font-bold sm:mt-48 sm:text-center sm:text-xl'>About Us
                </h1>
                <div
                    className=" 
                font-mono
                text-blue-900 text-center lg:text-start  lg:text-4xl sm:text-3xl  font-bold lg:leading-[4rem]  sm:leading-[4rem] sm:leading-[2rem] lg:mt-12 md:mt-6 xs:pt-56 lg:mx-0 sm:mt-4 sm:ml-10 sm:mr-10 xs:text-3xl xs:mt-56 md:text-4xl " >Grow Business Wif SEO
                </div>
                <p className="sm: mt-3 mt-6 mx-0 text-blue-700 lg:text-xl sm:text-lg sm:text-center lg:text-left font-catamaran leading-8 font-medium
                lg:text-start lg:mx-0 md:tex-center md:text-center  md:pt-6  md:text-lg sm:mt-2    sm:leading-[2rem]">
                    Over 10 Years Sceo Helping Companies Reach Their Financial And Branding Goals.

                </p>
                <div className="sm: mt-3 mt-6 mx-0 text-gray-700 lg:text-base sm:text-lg sm:text-center lg:text-left font-catamaran leading-8  lg:text-start lg:mx-0 md:tex-center md:text-center  md:pt-6  md:text-lg sm:mt-2  sm:leading-[2rem]" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.


                    <div className="flex gap-2 md:gap-4 sm:gap-2 lg:gap-2  mx-0 justify-center lg:justify-start md:mt-1 lg:pt-24 lg:pb-12 md:pt-12 sm:pt-16">

                        <button className="bg-blue-900 text-white hover:bg-purple-500  w-40 h-12 rounded font-bold transition-colors duration-150  rounded focus:shadow-outline ">
                            Learn More                        </button>


                    </div>

                </div>


            </div>

            <div className="lg:mr-10 xl:mt-36 sm:mr-24  mt-16 lg:w-full lg:h-auto sm:w-4/5 sm:mx-auto md:w-2/3 max-width-screen-xl  relative grid lg:grid-cols-6 md:grid-cols-12 gap-4 aspect-square  ">

                <Image
                    priority
                    fill
                    src='/images/about-img.png'
                    className=" animate-bounce max-w-full xl:-mt-16 lg:mt-6  md:-mt-6 position-absolute lg:block "
                    alt="home-font"
                    style={{
                        animationDuration: '20s',
                        animationIterationCount: 'infinite',
                        animationTimingFunction: 'linear',
                        transform: 'translate(0.2px, -0.5px)',

                    }}
                />

            </div>
        </div>

    </div>
}

export default Hero