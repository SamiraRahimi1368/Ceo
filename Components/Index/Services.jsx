
'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

const title = 'text-blue-700 w-36 h-16 pt-6 self-center font-bold  lg:-ml-6'
const p = 'font-rubik md:w-48 w-36 mb-6  text-left lg:-ml-6 		'
const div = 'lg:mr-10  sm:mr-24  lg:w-full lg:h-auto sm:w-4/5 sm:mx-auto md:w-2/3 max-width-screen-xl  relative grid lg:grid-cols-6 md:grid-cols-2 gap-2 aspect-square '
const svg = 'bg-gray-400 w-14 h-12 rounded-full   justify-center items-center '
const Services = () => {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1000,
        });

    }, []);
    return (
        <div className="service flex flex-col items-center h-auto  overflow-hidden ">
            <div className=" w-full h-auto px-4 lg:grid lg:grid-cols-2 lg:items-top lg:gap-12 lg:px-6 xl:px-20 max-w-screen-xl xl:mx-auto lg:mx-auto  lg:leading-4	mt-6 font-nunito">
                <div className='grid grid-cols-2 gap-12 '>
                    <div className={div}>
                        <div className="bg-purple-200 xl:w-64 lg:w-56 md:w-72 h-60 rounded-lg justify-items-center pt-2 lg:pl-16 xl:pl-24 md:pl-16 ">
                            <div className={svg}>
                                <svg
                                    className="w-20 h-9 stroke-blue-700 stroke-1 -ml-2 mt-4 "
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                                    ></path>
                                </svg>
                                <h2 className={title}>Great Results</h2>
                                <p className={p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta necessitatibus</p>
                            </div>
                        </div>

                    </div>

                    <div className={div}>
                        <div class="md:w-72 lg:pl-16 bg-pink-100 lg:w-56 xl:w-64 h-60 rounded-lg justify-items-center pt-6 md:mt-2 xl:mt-9 lg:mt-9 pl-24 md:pl-16">
                            <div className={svg}>
                                <svg className="w-20 h-9 stroke-blue-700 stroke-1 -ml-2 " fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"></path>
                                </svg>

                                <h2 className={title}>Business Worth
                                </h2>
                                <p className={p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta necessitatibus</p>
                            </div>
                        </div>

                    </div>

                    <div className={div}>
                        <div class="md:w-72 lg:pl-16 bg-green-100 md:mt-1  lg:w-56 xl:w-64 h-60 rounded-lg justify-items-center xl:-mt-16 pt-2 lg:-mt-28 pl-24  md:pl-16 ">
                            <div className={svg}>
                                <svg className="w-20 h-9 stroke-blue-700 stroke-1 -ml-2 mt-4 " fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"></path>
                                </svg>
                                <h2 className={title}>Keep Your Growth
                                </h2>
                                <p className={p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta necessitatibus</p>
                            </div>
                        </div>

                    </div>

                    <div className={div}>
                        <div class="md:mt-1 md:w-72 lg:pl-16 bg-slate-200 lg:w-56 xl:w-64 h-60 rounded-lg justify-items-center  xl:-mt-9 lg:-mt-20 pt-4 xl:pt-4 pl-24">
                            <div className={svg}>

                                <svg className="w-20 h-9 stroke-blue-700 stroke-1 -ml-2 " fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"></path>
                                </svg>

                                <h2 className={title}>Important ROI

                                </h2>
                                <p className={p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta necessitatibus</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='xl:mt-6 ' data-aos="fade-up">
                    <h1 className='font-rubik md:text-xl text-gray-700 lg:mt-12 md:mt-6 sm:mt-6 lg:text-left text-lg font-bold sm:mt-48 sm:text-center sm:text-xl' >
                        <span className="pb-2 border-gray-700 border-b">Features
                        </span>
                    </h1>
                    <div
                        className=" 
                font-nunito
                text-blue-900 text-center lg:text-start md:text-3xl lg:text-4xl sm:text-3xl  font-bold lg:leading-[4rem]  sm:leading-[4rem] sm:leading-[2rem] lg:mt-12 md:mt-6 xs:pt-56 lg:mx-0 sm:mt-4 sm:ml-10 sm:mr-10 xs:text-3xl xs:mt-56 md:text-4xl  " >Create Awesome Service With Our Tools
                    </div>
                    <p className="font-nunito sm: mt-3 mt-6 mx-0 text-gray-700 lg:text-lg sm:text-lg sm:text-center lg:text-left  leading-8 font-normal		
                lg:text-start lg:mx-0 md:tex-center md:text-center xl:p-0 md:pt-6 md:p-12 md:text-lg sm:mt-2    sm:leading-[2rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ut harum voluptatum, magni adipisci in eos quo expedita nemo. Dignissimos nemo repellendus officiis laboriosam veniam cumque obcaecati omnis adipisci illo amet consectetur adipisicing. Omnis ut harum voluptatum, magni adipisci in eos quo expedita nemo. Dignissimos repellendus officiis.

                    </p>


                    <div className="flex gap-2 md:gap-4 sm:gap-2 lg:gap-2  mx-0 justify-center lg:justify-start md:mt-1 lg:pt-9 lg:pb-12 md:pt-4 sm:pt-16">

                        <button className="bg-blue-900 text-white hover:bg-purple-500  w-40 h-12 rounded font-bold transition-colors duration-150 md:mb-6 rounded focus:shadow-outline ">
                            About Us                            </button>


                    </div>

                </div>


            </div>
        </div >
    );
};

export default Services