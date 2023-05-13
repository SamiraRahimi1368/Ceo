"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import Image from "next/image";

const Customers = ({ items }) => {
  return (
    <div className="mt-12 w-full mx-auto flex justify-center mx-auto   h-auto  rounded-lg border-red-300">
      <div className="realtive">
        <div className="customers-pagination mb-10 "></div>
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
          pagination={{
            clickable: true,
            el: "customers-pagination",
          }}
        >
          {items.map((item) => (
            <SwiperSlide className="border rounded-lg p-5  mx-auto  bg-slate-50 text-white">
              <div className="lg:mr-10 xl:mt-36 sm:mr-24  mt-16 lg:w-full lg:h-auto sm:w-4/5 sm:mx-auto md:w-2/3 max-width-screen-xl  relative grid lg:grid-cols-6 md:grid-cols-12 gap-4 aspect-square  ">
                <Image
                  priority
                  fill
                  src={item.image}
                  className=" animate-bounce max-w-full h-auto xl:mt-12 lg:mt-6  md:-mt-6 position-absolute md:animate-none "
                  alt="home-font"
                  class="animate-imageBounce"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Customers;
