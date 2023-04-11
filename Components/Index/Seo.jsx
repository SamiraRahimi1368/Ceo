'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Image from "next/image"

const Seo = () => {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1000,
        });

    }, []);

    return (
        <div className='className="hero flex flex-col items-center   h-auto  overflow-hidden " data-aos="fade-up" data-aos-duration="1600"'>
            <div
                className=" w-full h-auto px-4 lg:grid lg:grid-cols-2 lg:items-top lg:gap-12 lg:px-12 xl:px-20 max-w-screen-xl xl:mx-auto lg:mx-auto  lg:leading-4	">
                <div className='xl:mt-6'>
                    <h1 className='font-rubik md:text-xl text-gray-700 lg:mt-12 md:mt-6 sm:mt-6  text-lg font-bold sm:mt-48 sm:text-center sm:text-xl'>
                        <span className="pb-2 border-gray-700 border-b">Web SEO
                        </span>
                    </h1>
                    <div
                        className=" 
                    font-nunito
                text-blue-900 text-center lg:text-start  lg:text-4xl sm:text-3xl  font-bold lg:leading-[4rem]  sm:leading-[4rem] sm:leading-[2rem] lg:mt-6 md:mt-6 xs:pt-56 lg:mx-0 sm:mt-4 sm:ml-10 sm:mr-10 xs:text-3xl xs:mt-56 md:text-4xl " >Check Your Website For SEO

                    </div>

                    <div className="sm:mt-3 mx-0 text-gray-700 lg:text-base sm:text-lg sm:text-center lg:text-left font-catamaran leading-8  lg:text-start lg:mx-0 md:tex-center md:text-center  md:pt-6  md:text-lg sm:mt-2  sm:leading-[2rem]" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime placeat nostrum illum quo et enim, dolorem ducimus eveniet doloremque a quis beatae, quibusdam eum ut, autem quam? Totam, praesentium itaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime placeat nostrum illum quo et enim, dolorem ducimus eveniet doloremque a quis beatae, quibusdam eum ut, autem quam? Totam, praesentium itaque.




                        {/* <div className="flex gap-2 md:gap-4 sm:gap-2 lg:gap-2  mx-0 justify-center lg:justify-start md:mt-1 lg:pt-24 lg:pb-12 md:pt-12 sm:pt-16">

                        <button className="bg-blue-900 text-white hover:bg-purple-500  w-40 h-12 rounded font-bold transition-colors duration-150  rounded focus:shadow-outline ">
                            Learn More
                        </button>


                    </div> */}
                        <div class="flex items-center bg-white h-16 rounded-full pl-6 shadow-lg mt-12">
                            <input type="search" placeholder="search your domian name here" class="bg-transparent outline-none w-full" />

                            <button class="shutter hover:bg-purple-600  bg-blue-700 relative  rounded text-white hover:text-purple-900  overflow-hidden z-10 group font-base rounded-r-full h-16 w-40 font-rubik">
                        <span>Check now</span>
                        <span class=" absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] w-full z-50 group-hover:text-purple-900 transition">Check now</span>
                    </button>



                            {/* <button class="text-gray-500 hover:text-gray-700 focus:outline-none">
                                <button className="bg-blue-900 text-white hover:bg-purple-500  w-40 h-16 rounded-r-full font-bold transition-colors duration-150  focus:shadow-outline ">
                                    Check Now                        </button>
                            </button> */}
                                   
                        </div>

                    </div>


                </div>

                <div className="lg:mr-10 xl:mt-36 sm:mr-24  mt-16 lg:w-full lg:h-auto sm:w-4/5 sm:mx-auto md:w-2/3 max-width-screen-xl  relative grid lg:grid-cols-6 md:grid-cols-12 gap-4 aspect-square  ">



                    <Image
                        priority
                        fill
                        src='/images/serach-img.png'
                        className=" animate-bounce max-w-full h-auto xl:mt-12 lg:mt-6  md:-mt-6 position-absolute md:animate-none "
                        alt="home-font"
                        class="animate-imageBounce"
                    />
                    {/* <div className="bg-blue-500 h-40 w-full" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 100%)' }}>

                
</div> */}

                </div>

            </div>
        </div>

    )
}

export default Seo