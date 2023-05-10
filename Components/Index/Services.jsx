"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Pagination } from "swiper";

const Services = ({ supertitle, title, description, items }) => {
  return (
    <div className="max-w-screen-lg mx-auto ">
      <div className="  max-w-screen-lg mx-auto">
        <div className=" xl:mt-6" data-aos="fade-up">
          <h1 className="font-rubik md:text-xl text-gray-700 lg:mt-12 md:mt-6 sm:mt-6 lg:text-center text-lg font-bold sm:mt-48 sm:text-center sm:text-xl">
            <span className="pb-2 border-gray-700 border-b">{supertitle}</span>
          </h1>
          <h1 className="font-nunito text-blue-900 text-center lg:text-center md:text-3xl lg:text-4xl sm:text-3xl font-bold lg:leading-[4rem] sm:leading-[4rem] sm:leading-[2rem] lg:mt-9 md:mt-6 xs:pt-6 lg:mx-0 sm:mt-4 sm:ml-10 sm:mr-10 xs:text-3xl xs:mt-56 md:text-4xl">
            {title}
          </h1>
          <p className="font-nunito sm:mt-3 mt-6 text-gray-700 lg:text-md sm:text-lg sm:text-center lg:text-center leading-8 font-normal lg:mx-0 md:tex-center md:text-center xl:p-0 md:pt-6 md:p-12 md:text-lg sm:mt-2 sm:leading-[2rem] ">
            {description}
          </p>
        </div>
      </div>
      <div className="realtive">
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
          className="grid lg:max-w-screen-lg grid-cols-3 gap-x-20 gap-y-20 mt-10 md:m-6 select-none cursor-grab md:flex rounded-xl p-8 md:p-0 dark:bg-slate-800 mb-12 pt-36"
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {items.map((item) => (
            <SwiperSlide
              className="border rounded-lg p-5  mx-auto  bg-slate-50 text-white 	  "
              style={{
                background: "linear-gradient(to bottom, #a157e7, #00429b)",
              }}
            >
              <div
                className="w-20 h-20  relative mt-6 
                    border-red-400"
                dangerouslySetInnerHTML={{ __html: item.svg }}
              ></div>

              <img
                src="../images/services-shape.png"
                class="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300 transition-transform hover:scale-110"
              />

              <h3 className="text-white font-bold flex  text-left mt-5 font-lg font-rubik ">
                {" "}
                {item.title}{" "}
              </h3>
              <h3 className="text-white dark:text-slate-500 flex text-left font-rubik pt-4">
                {" "}
                {item.description}{" "}
              </h3>
              <a className="text-white dark:text-slate-500 flex text-left pt-6">
                {" "}
                Read More {item.link}{" "}
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>
        {`
        .swiper-pagination-bullet {
          background-color: light-gray;
          width:8px;
          height:8px;
          top: 24px;      
        }
        `}
      </style>
    </div>
  );
};

export default Services;
