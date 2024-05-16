import React,{useState} from 'react';
import {NavLink} from "react-router-dom";
import "../../style/Nav.css";
import "../TopNav/TopNav.css";
import NavLinks from './NavLinks';

const NavBar = () => {
    return (
        <nav className="bg-[#890000] text-white p-4 hidden md:block">
      <div className="">
        <ul className='flex justify-around font-[poppins] font-medium text-xl upparcase'>
          <NavLink to="/"><li><a href="/" className='hover:text-[#FAA327]' >Home</a></li></NavLink>
          <NavLinks/>
          <NavLink to="/cbse"><li ><a href="/"  className='hover:text-[#FAA327]'>CBSE Mandatory Disclosure</a></li></NavLink>
          <NavLink to="/facilities"> <li ><a href="/"  className='hover:text-[#FAA327]'>Facilities</a></li></NavLink>
          <NavLink to="/admission"> <li ><a href="/"  className='hover:text-[#FAA327]'>Admissions</a></li></NavLink>
          <NavLink to="/contactus"> <li ><a href="/"  className='hover:text-[#FAA327]'>Contact Us</a></li></NavLink>
        </ul>
      </div>
    </nav>
    );
}


export default NavBar;
