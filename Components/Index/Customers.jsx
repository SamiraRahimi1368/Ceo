
'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination'
import 'swiper/css';

const Customers = () => {
    return (
        <div className="mt-12 w-full mx-auto flex justify-center mx-auto   h-auto  rounded-lg border-red-300">
            <div className='realtive'>
    
    <Swiper
            spaceBetween={40}
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
            className="grid lg:max-w-screen-lg grid-cols-3 gap-x-20 gap-y-20 mt-10  md:m-6 select-none cursor-grab md:flex rounded-xl p-8 md:p-0 dark:bg-slate-800 mb-12 swiper-container swiper-pagination "
            pagination={{ clickable: true }}
            
        >
          
            {
                items.map(item => <SwiperSlide
                    className="border rounded-lg p-5  mx-auto  bg-slate-50 text-white 	  " 
                    style={{ background: 'linear-gradient(to bottom, #a157e7, #00429b)' }}
                    
                >
                     <div className="w-20 h-20 mx-auto relative mt-6 
                    border-red-400" 
                   
                    dangerouslySetInnerHTML={{ __html: item.svg }}
                    >
                    </div>

                    <img src="../images/services-shape.png" class="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300 transition-transform hover:scale-110" />

                    <h3 className='text-white font-bold flex  text-left mt-5 font-lg font-rubik '> {item.title} </h3>
                    <h3 className='text-white dark:text-slate-500 flex text-left font-rubik pt-4' > {item.description} </h3>
                    <a className='text-white dark:text-slate-500 flex text-left pt-6' > Read More {item.link} </a>

                </SwiperSlide>)
            }
        </Swiper>
    </div>
        </div>
    )
}


export default Customers