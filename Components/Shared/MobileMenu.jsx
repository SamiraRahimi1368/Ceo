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
                url: '/projcts/A',
                children: [
                    {
                        title: 'Subproject 1',
                        url: '/projects/A/1'
                    },
                    {
                        title: 'Subproject 2',
                        url: '/projects/A/2'
                    }
                ]
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

    const ItemStyle = 'p-5  text-lg '
    const style = {
        transform: `${true ? 'rotateX(0deg)' : 'rotateX(90deg)'}`,
        backgroundColor: `${open ? 'bg-slate-800' : ''}`

    }


    return (

        <div
            className=" bg-slate-800  w-auto h-auto  absolute top-20 left-0 right-0 mx-auto origin-top transition-all duration-1000 border border-t-white"
            style={style}
        >
            {open && (
                <ul className="inline inline-block  rounded-lg text-white md:flex-row  md:mt-0 md:text-sm 	  lg:mt-8 lg:gap-2 lg:pt-6 2xl:text-2xl ">
                    {
                        menuItems.map(item =>
                            <li
                                key={item.id}
                                className=" group relative border-b border-gray-900 last:border-b-0 text-lg pl-6 py-3	"
                            >
                                <a
                                    href={item.url}
                                    className={ItemStyle}
                                    onClick={() => console.log('hamid')}

                                >
                                    {item.title}
                                    {
                                        item.children?.length > 0 &&
                                        <svg
                                            className=" fill-white h-12 w-12 text-white right-0  absolute -mt-6  transition: transform 0.3s ease-in-out;"
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
                                                d="M5 12h14M12 5v14"
                                            />
                                        </svg>
                                    }


                                </a>
                                {
                                    item.children?.length > 0 &&

                                    <ul className="ml-10">


                                        {
                                            item.children.map(child =>
                                                <li
                                                    key={child.id}
                                                    className="py-3 pl-4 hover:text-purple-600 "
                                                >
                                                    <a
                                                        href={child.url}
                                                    >
                                                        {
                                                            child.title

                                                        }
                                                        {
                                                            child.children?.length > 0 &&
                                                            <svg
                                                                className=" fill-white h-12 w-12 text-white right-0  absolute -mt-6  transition: transform 0.3s ease-in-out;"
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
                                                                    d="M5 12h14M12 5v14"
                                                                />
                                                            </svg>
                                                        }
                                                    </a>

                                                    {
                                                        child.children && (
                                                            <ul>
                                                                {child.children.map(subchild => (
                                                                    <li
                                                                        key={subchild.id}
                                                                        className="py-3 pl-4 hover:text-purple-600"
                                                                    >
                                                                        <a href={subchild.url}>{subchild.title}</a>
                                                                    </li>

                                                                ))}
                                                            </ul>
                                                        )}
                                                </li>)
                                        }

                                    </ul>

                                }
                            </li>
                        )
                    }

                </ul>
            )
            }
        </div >

    )
}

export default MobileMenu
