import DesktopMenu from "./DesktopMenu"
//import MobileMenu from "./MobileMenu"
const Header = () => {

   return (
      <div className="header mx-auto  justify-between grid grid-cols-3 flex w-full	 mx-auto  "
      >


         <div className="nav flex flex-col mx-auto mt-4 ">
            <img src="images/heder-logo.png">
            </img>

         </div>
         <nav className="lg:-mt-4">
            <DesktopMenu />
      </nav>
        <div className="xl:mt-6 hidden lg:block flex flex-col mx-auto z-40">
            <button
               className="bg-blue-700 brightness-80 text-white hover:bg-white hover:text-blue-700 w-36 h-12 mr-32 ml-10 mt:1 rounded  font-bold hover:transition-all  rounded  xl:mt-2 z-0 lg:w-28 lg:-mr-24 lg:mt-6 "
            >
               Sign Up</button>
         </div> 
      </div >

   )


}

export default Header