import React from 'react';
import HeroSection from '../Hero/HeroSection';
import { countries } from '../Hero/HeroData';
import Facilities from '../Facilities/Facilities';
import Events from '../Events/Events';
import Blog from '../Blog/Blog';
import TopNav from '../TopNav/TopNav';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';


const LandingPage = () => {
  return (
    <div>
      <TopNav/>
      <NavBar/>
      <HeroSection images={countries}/>
      <Facilities/>
      <Events/>
      <Blog/>
      <Footer/>
    
      
    </div>
  )
}

export default LandingPage;
