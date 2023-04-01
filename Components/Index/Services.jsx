'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Image from "next/image"

const Services = ({ items }) => {
  return (
    <div className='items-center max-w-screen-md mx-auto '>
    <div className="flex justify-center items-center max-w-screen-md mx-auto">
      <div className='text-center xl:mt-6' data-aos="fade-up">
        <h1 className='font-rubik md:text-xl text-gray-700 lg:mt-12 md:mt-6 sm:mt-6 lg:text-center text-lg font-bold sm:mt-48 sm:text-center sm:text-xl'>
          <span className="pb-2 border-gray-700 border-b">Our Services</span>
        </h1>
        <h1 className="font-nunito text-blue-900 text-center lg:text-center md:text-3xl lg:text-4xl sm:text-3xl font-bold lg:leading-[4rem] sm:leading-[4rem] sm:leading-[2rem] lg:mt-9 md:mt-6 xs:pt-56 lg:mx-0 sm:mt-4 sm:ml-10 sm:mr-10 xs:text-3xl xs:mt-56 md:text-4xl">
          You Take Growth For Business
        </h1>
        <p className="font-nunito sm:mt-3 mt-6 text-gray-700 lg:text-md sm:text-lg sm:text-center lg:text-center leading-8 font-normal lg:mx-0 md:tex-center md:text-center xl:p-0 md:pt-6 md:p-12 md:text-lg sm:mt-2 sm:leading-[2rem]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
        </p>
      </div>

    </div>
    <Swiper
            spaceBetween={20}
            slidesPerView={3}
            slidesPerGroup={4}
            // breakpoints={{
            //     [md]: {
            //         slidesPerView: 2
            //     },
            //     [lg]: {
            //         slidesPerView: 3
            //     }
            // }}
            className="grid max-w-screen-lg grid-cols-3 gap-x-10 gap-y-20 mt-10  select-none cursor-grab md:flex rounded-xl p-8 md:p-0 dark:bg-slate-800"
        >
            {
                items.map(item => <SwiperSlide
                    className="border rounded-lg p-5 m:10 bg-slate-50 text-blues  "
                    
                >
                     <div className="w-20 h-20 mx-auto relative mt-6 
                    border-red-400">
                        <Image
                            fill
                            alt="svg"
                            src={`/${item.svg}`}
                            className=" w-20 md:w-20 md:h-auto border-4 border-indigo-200 border-b-indigo-500 rounded-full border-l-indigo-500 md:h-auto  rounded-full"
                        />
                    </div>

                  
                    <h3 className='text-slate-900 font-bold flex justify-center mt-5 font-lg'> {item.title} </h3>
                    <h3 className='text-slate-700 dark:text-slate-500 flex justify-center' > {item.description} </h3>
                    <h3 className='text-slate-700 dark:text-slate-500 flex justify-center' > {item.link} </h3>

                </SwiperSlide>)
            }
        </Swiper>


    </div>
  );
}

export default Services;