import React, { useState } from 'react';


const ItemStyle = 'flex items-center justify-between w-full  lg:text-base xl:text-base 2xl:text-xl text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:w-auto lg:ml-6 ';

const ItemStyleWithBorder = 'border-b border-gray-400';



const menuItems = [
    {
        title: 'Home',
        url: '/'
    },
    {
        title: 'About',
        url: '/about'
    },
    {
        title: 'Projects',
        url: '/projects',
        children: [
            {
                title: 'Project A',
                url: '/projcts/A'
            },
            {
                title: 'Project B',
                url: '/projcts/B'
            },
            {
                title: 'Project C',
                url: '/projcts/C'
            }
        ]
    },
    {
        title: 'Prices',
        url: '/prices'
    },
    {
        title: 'Contact',
        url: '/contact'
    },
]


const MobileMenu = ({ open }) => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const ItemStyle = 'p-5  text-lg '
    const style = {
        transform: `${open ? 'rotateX(0deg)' : 'rotateX(90deg)'}`,
        backgroundColor: `${showMobileMenu ? 'bg-slate-800' : ''}`

    }
    return (
        <div
            className=" bg-slate-800 lg:hidden w-auto h-auto  absolute top-20 left-0 right-0 mx-auto origin-top transition-all duration-1000 border border-t-white"
            style={style}
        >
            <button
                className="w-8 h-8 text-white rounded-md flex items-center justify-center focus:outline-none position- fixed
                -top-12
                right-2
                z-10
                focus:outline-none
                "
                onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
                {showMobileMenu ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-white  absolute   transition: transform 0.3s ease-in-out;
        "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            s stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 absolute right-0 -mr:6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                )}
            </button>
            {showMobileMenu && (
                <ul className="inline inline-block  rounded-lg text-white md:flex-row  md:mt-0 md:text-sm 	  lg:mt-8 lg:gap-2 lg:pt-6 2xl:text-2xl">
                    {
                        menuItems.map(item =>
                            <li className=" group relative flex items-center relative h-16 border-b border-gray-900 last:border-b-0 text-lg pl-6 	">
                                <a
                                    href={item.url}
                                    id="dropdownNavbarLink"
                                    data-dropdown-toggle="dropdownNavbar"
                                    className={ItemStyle}
                                >
                                    {item.title}
                                    {
                                        item.children?.length > 0 &&
                                        <svg
        className="fill-white group-hover:fill-indigo-400"
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        width="20"
    >
        <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 5v14M5 12h14"
        />
    </svg>
                                    }
                                </a>
                                {
                                    item.children?.length > 0 &&
                                    
                                    <ul className="invisible opacity-10 translate-y-8 group-hover:block group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-1000 absolute top-16  text-white ml-4 lg:w-52 xl:w-68 2xl:w-72 md:w-96 md:font-light z-40  ;
                                    mt-4 	 ">
                                      
                                        {
                                            item.children.map(child =>
                                                <li className="py-3 pl-4 hover:text-purple-600 ">
                                                    <a
                                                        href={child.url}
                                                    >
                                                        {
                                                            child.title

                                                        }
                                                    </a>
                                                </li>)
                                        }
                                    </ul>
                                }
                            </li>
                        )
                    }

                </ul>
            )}
        </div>

    )
}

export default MobileMenu
