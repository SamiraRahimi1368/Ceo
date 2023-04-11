
'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

const title = 'text-blue-700 font-bold bg-red-800'
const p = 'font-rubik'
const div = 'lg:mr-10  sm:mr-24  lg:w-full lg:h-auto sm:w-4/5 sm:mx-auto md:w-2/3 max-width-screen-xl  relative aspect-square mx-auto '
const svg = 'bg-gray-400 w-14 h-12 rounded-full   justify-center items-center  '

const Features = ({ supertitle, title, description, ctaText, ctaLink, items }) => {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1000,
        });

    }, []);
    const getBackgroundColor = index => {
        switch (index) {
            case 0:

                return 'bg-purple-100';
            case 1:
                return 'bg-pink-100';
            case 2:
                return 'bg-green-50';
            case 3:
                return 'bg-blue-100';

            default:
                break;
        }
    }

    const getMargin = index => {
        switch (index) {

            case 1:
                return 'lg:mt-9 '
                    ;
            case 2:
                return '';
            case 3:
                return 'lg:mt-9 ';

            default:
                break;
        }
    }

    return (
        <div className='relative'>
            <div className='w-full mx-auto flex justify-center mx-auto   h-auto  overflow-hidden  '>
                {
                    <div className='w-full lg:grid lg:grid-cols-2 md:grid   mx-auto  pl-12 pr-6  '>
                        {items.map((item, index) => (
                            <div className={`xl:w-64 lg:w-52  aspect-square rounded-lg py-12 px-6 flex flex-col  justify-between items-center ${getBackgroundColor(index)} ${getMargin(index)}`}>

                                <div className='bg-blue-200 w-10 h-10 rounded-full text-blue-500 p-2' dangerouslySetInnerHTML={{ __html: item.svg }} />


                                <h2 className='font-nunito text-blue-800 font-bold'>{item.title}</h2>
                                <p className='font-rubik text-gray-700 '>{item.description}</p>
                                <img src="../images/features-card-shape-1.png" class="absolute top-0 left-14 w-24 h-12 opacity-0 hover:opacity-100 transition-opacity duration-300 transition-transform hover:scale-110" />
                                <img src="../images/features-card-shape-1.png" class="absolute bottom-0 right-14 w-24 h-12 opacity-0 hover:opacity-100 transition-opacity duration-300 transition-transform hover:scale-110" />
                            </div>
                        ))}
                    </div>

                }
                <div className=' lg:h-auto sm:w-4/5 sm:mx-auto w-72  max-width-screen-lg lg:pr-16 relative aspect-square ' data-aos="fade-up">
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
                 lg:text-start lg:-ml-12 xl:-ml-0 lg:mx-0 md:tex-center md:text-center xl:p-0 md:pt-6 md:p-12 md:text-lg sm:mt-2    sm:leading-[2rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ut harum voluptatum, magni adipisci in eos quo expedita nemo. Dignissimos nemo repellendus officiis laboriosam veniam cumque obcaecati omnis adipisci illo amet consectetur adipisicing. Omnis ut harum voluptatum, magni adipisci in eos quo expedita nemo. Dignissimos repellendus officiis.

                    </p>


                    <div className="flex gap-2 md:gap-4 sm:gap-2 lg:gap-2  mx-0 justify-center lg:justify-start md:mt-1 lg:pt-9 lg:pb-12 md:pt-4 sm:pt-16">

                        <button className="bg-blue-900 text-white hover:bg-purple-500  w-40 h-12 rounded font-bold transition-colors duration-150 md:mb-6 rounded focus:shadow-outline ">
                            About Us                            </button>
                    </div>
                </div>

            </div>

        </div>



    );
};

export default Features