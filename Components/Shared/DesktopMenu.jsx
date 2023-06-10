import Link from 'next/link';

const ItemStyle = 'flex items-center justify-between text-sm	 w-full py-2 pl-3 pr-4  2xl:text-xl text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 lg:w-auto md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent lg:ml-6 '


const menuItems = [
    {
        title: 'Home',
        url: '/',
        children: [
            {
                title: 'HomeStyle one',
                url: '/home/homeStyle one'
            },
            {
                title: 'HomeStyle two',
                url: '/home/homeStyle two'
            },

        ]
    },
    {
        title: 'About Us',
        url: '/about'
    },
    {
        title: 'Services',
        url: '/services',
        children: [
            {
                title: 'Service Grid',
                url: '/services/grid'
            },
            {
                title: 'Service Slider',
                url: '/services/slider',
                children: [
                    {
                        title: 'X',
                        url: '/services/x'
                    }
                ]
            },
            {
                title: 'Service Details',
                url: '/services/details'
            }
        ]
    },
    {
        title: 'Shop',
        url: '/shop',
        children: [
            {
                title: 'project A',
                url: '/projcts/A'
            },
            {
                title: 'project B',
                url: '/projcts/B'
            },
            {
                title: 'project C',
                url: '/projcts/C'
            }
        ]
    },
    {
        title: 'Contact',
        url: '/contact'
    },
]
const DesktopMenu = () => {
    return (
        <nav className="md:hidden xs:hidden sm:hidden lg:block font-sans">
            <div className="container flex  items-center justify-between mx-auto ">
                <div className=" w-full md:block md:w-auto " id="navbar-dropdown">
                    <ul className="flex flex-col border border-gray-100 rounded-lg text-white md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700  lg:gap-2 lg:pt-6 2xl:text-2xl whitespace-nowrap ">
                        {
                            menuItems.map((item, index) =>
                                <li
                                    key={index}
                                    className="group relative flex items-center relative h-20 "
                                >
                                    <Link
                                        href={item.url}
                                        id="dropdownNavbarLink"
                                        data-dropdown-toggle="dropdownNavbar"
                                        className={ItemStyle}
                                    >
                                        {item.title}
                                        {
                                            item.children?.length > 0 &&
                                            <svg
                                                className="fill-white  "
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="20"
                                                width="20"
                                            >
                                                <path d="m10 13.062-5-5L6.062 7 10 10.938 13.938 7 15 8.062Z" />
                                            </svg>
                                        }
                                    </Link>
                                    {
                                        item.children?.length > 0 &&
                                        <ul className="invisible opacity-10 translate-y-8 group-hover:block group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-1000 absolute top-16 bg-white text-black ml-4 lg:w-52 xl:w-68 2xl:w-72  mt-4  border-t border-blue-700 border-t-2 z-50 	">
                                            {
                                                item.children.map((child, childIndex) =>
                                                    <li
                                                        key={childIndex}
                                                        className="py-3 pl-4 border-b-2 border-gray-100 border-lg border-slate-200 	first:bg-slate-200 first:text-blue-700 hover:text-blue-700 last:border-0 hover:bg-slate-200 "
                                                    >
                                                        <Link
                                                            href={child.url}
                                                        >
                                                            {
                                                                child.title

                                                            }
                                                        </Link>
                                                    </li>)
                                            }
                                        </ul>
                                    }
                                </li>
                            )
                        }

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default DesktopMenu
