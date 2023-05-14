"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import Image from "next/image";
import { Pagination } from "swiper";

const Customers = ({ items }) => {
  return (
    <div className="text-center	 text-slate-800">
      <h1 className="font-bold font -rubik text-slate-600 pt-14">
        TRUSTED BY OVER 40,000
      </h1>
      <h1 className="font-bold font-rubik text-blue-800	text-4xl pt-5	">Our Customers</h1>
      <Swiper
        spaceBetween={40}
        slidesPerView={5}
        slidesPerGroup={4}
        autoplay={{ delay: 3000 }}
        // breakpoints={{
        //     [md]: {
        //         slidesPerView: 2
        //     },
        //     [lg]: {
        //         slidesPerView: 3
        //     }
        // }}
        className="flex max-w-screen-lg mx-auto gap-2 gap-y-20 mt-5 flex-wrap justify-center mt-10  select-none cursor-grab "
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <div className=" max-w-screen-xl mx-auto gap-2 gap-y-20 mt-5  mt-10  select-none cursor-grab  ">
          {items.map((item) => (
            <SwiperSlide>
              <div className=" p-5 m-10   ">
                <div className="w-32 h-26 aspect-square relative">
                  <Image
                    className="object-cover "
                    src={item.image}
                    fill
                    alt="customer-image"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <style>
        {`
.swiper-pagination-bullet {
  background-color: light-gray;
  width:8px;
  height:8px;
}
`}
      </style>
    </div>
  );
};

export default Customers;
