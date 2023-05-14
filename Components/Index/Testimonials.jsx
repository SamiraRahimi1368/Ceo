"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import React from "react";

const star = (i, filled) => (
  <svg
    key={i}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      className={"text-[#ffce39] " + (filled && "fill-[#ffce39]")}
      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
    />
  </svg>
);

const Testimonials = ({ title, supertitle, description, image, items }) => {
  return (
    <div className="text-center	mt-24 text-slate-800 ">
      <h1 className="font-rubik font-bold text-orange-600 pt-4">
        Testimonials
      </h1>
      <h1 className="font-rubik font-bold text-navy-900	text-4xl pt-5">
        What Our Client’s Say
      </h1>
      <h2 className="font-bold text-navy-900	text-4xl pt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse
        ultrices gravida.
      </h2>
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
        {items.map((item) => (
          <SwiperSlide className="border rounded-lg p-5 m:10 bg-slate-50 text-blues  ">
            <div className="flex gap-0.5 justify-center">
              {[...Array(5).keys()].map((i) =>
                star(i, i + 1 < item.rating * 1)
              )}
            </div>

            <div
              className="w-20 h-20 mx-auto relative mt-6 
                    border-red-400"
            >
              <Image
                priority
                fill
                src={item.image}
                className=" -ml-12 mt-24  object-cover lg:block md:hidden sm:hidden xs:hidden rounded-full "
                data-aos="zoom-in"
                alt="home-font"
              />
            </div>
            <h3 className="text-slate-900 font-bold flex justify-center mt-5 font-lg">
              {title}
            </h3>
            <h3 className="text-slate-700 dark:text-slate-500 flex justify-center">
              {supertitle}
              <h3 className="text-slate-700 dark:text-slate-500 flex justify-center">
                {description}
              </h3>
            </h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
