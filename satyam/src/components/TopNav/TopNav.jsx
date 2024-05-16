import React,{useState} from 'react';
import Logo from '../../../images/logo.png'
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMail } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';
import "../TopNav/TopNav.css";
import './script.js';
import { HiMenuAlt3 } from "react-icons/hi";
import { HiMenuAlt1 } from "react-icons/hi";
import TopNavLinks from './TopNavLinks.jsx';




const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (

    <div>
      <nav className='bg-white text-red-800 p-1 shadow-lg'>
        <div className='flex flex-col md:flex-row justify-between mx-auto  items-center space-y-4 md:space-y-0 '>


          {/* logo */}
          <div className='ml-4'>
            <Link to="/">
              <img className='w-[200px] h-[60px]' src={Logo} alt="" />
            </Link>

          </div>


          {/* Menus */}
          <div
            className="flex flex-col md:flex-row justify-evenly items-center  space-x-0 md:space-x-6 space-y-6 md:space-y-0">

            {/* Menu-1 */}
            <div className='flex items-center space-x-2'>
              {/* phone icon */}
              <BiSolidPhoneCall className='text-2xl' />
              {/* phone number */}
              <a href="#" className='text-lg md:tracking-tight hover:text-blue-500 hover:scale-105'>+91 7619377742</a>
            </div>


            {/* Menu-2 */}
            <div className='flex items-center space-x-2 '>
              {/* phone Mail */}
              <IoMail className='text-2xl' />
              {/* Mail-Id */}
              <a href="#" className='text-lg md:tracking-tight hover:text-blue-500 hover:scale-105'>harshamt20@gmail.com</a>
            </div>

            {/* Button */}
            <Link to="/admission">
            <button className='bg-red-800 text-white md:py-2 md:px-3 w-full md:w-[150px] rounded-full py-3 px-4 hover:shadow-lg hover:scale-105'>Enroll Now</button>
            </Link>
            

          </div>
        </div>


        {/* Hamburger btn */}
        <div 
          className={`absolute top-4 right-2 text-3xl z-50 md:hidden ${isMenuOpen ? 'text-[#FAA327]' : 'text-red-800'}`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? <HiMenuAlt1 /> : <HiMenuAlt3 />}
        </div>

      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
      <div id="menu" className='bg-[#1C0047] absolute  top-0 left-0 w-full h-full    z-40 flex flex-col'>
        <ul className='text-white flex flex-col items-center font-medium  mt-16'>
          <NavLink to="/" className='py-3 hover:text-[#FAA327]  inline-block'> Home</NavLink>
          <TopNavLinks />
          <NavLink to="/cbse" className='py-3 hover:text-[#FAA327] inline-block'>
            CBSE Mandatory
          </NavLink>
          <NavLink to="/facilities" className='py-3 hover:text-[#FAA327] inline-block'>
            Facilities
          </NavLink>
          <NavLink to="/admission" className='py-3 hover:text-[#FAA327] inline-block'>
            Admission
          </NavLink>
          <NavLink to="/contactus" className='py-3 hover:text-[#FAA327]  inline-block'>
            Contact Us
          </NavLink>
        </ul>
      </div>
      )}
    </div>

  )
}

export default TopNav;
