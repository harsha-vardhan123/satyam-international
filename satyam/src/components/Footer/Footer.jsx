import React from 'react';
import "./Footer.css";
import logo from "../../../images/logo.png";
import { SiFacebook } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';



const Footer = () => {
    useEffect(() => {
        // Select all quick links in the footer
        const quickLinks = document.querySelectorAll('.footer-link');
    
        // Add event listener to each quick link
        quickLinks.forEach(link => {
          link.addEventListener('click', scrollToTop);
        });
    
        // Remove event listeners on cleanup
        return () => {
          quickLinks.forEach(link => {
            link.removeEventListener('click', scrollToTop);
          });
        };
      }, []);
    
      // Function to scroll to the top of the page
      const scrollToTop = (event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Wait for scrolling to finish before navigating to the section
        setTimeout(() => {
          window.location.href = event.target.href;
        }, 100); // Adjust the delay according to your preference
      };

  return (
    <div className='bg-[#390101] text-white'>
      
<div className="grid  grid-cols-2 md:grid-cols-4  ">
    {/* LOGO */}
    <div  className='grid-1 col-span-2 md:col-span-1   md m-6 '>
       <img src={logo} alt='' className='w-[200px] h-[60px]'/> 
    </div>

    {/* links */}
    <div className='grid-2 m-6'>
    <div className='pb-4'>
            <h1 className='text-2xl font-bold'>Quick Links</h1>
        </div>
        <div className='flex flex-col  '>
            <ul className='flex flex-col gap-2'>
            <Link to="/" className='py-2 hover:text-[#FAA327] footer-link'>
                        Home
                    </Link>
                    <Link to="/aboutus" className='py-2 hover:text-[#FAA327] footer-link'>
                        AboutUs
                    </Link>
                    <Link to="/affiliation" className='py-2 hover:text-[#FAA327] footer-link'>
                        Academics
                    </Link>
                    <Link to="/cbse" className='py-2 hover:text-[#FAA327] footer-link'>
                    CBSE Mandatory Disclosure
                    </Link>
                    <Link to="/facilities" className=' py-2 hover:text-[#FAA327] footer-link'>
                    Facilities
                    </Link>
                    <Link to="/admission" className=' py-2 hover:text-[#FAA327] footer-link'>
                    Admissions
                    </Link>
                    <Link to="/contactus" className=' py-2 hover:text-[#FAA327] footer-link'>
                    Contact Us
                    </Link>

                
            </ul>

        </div>
        
        
    </div>
        
    
    <div className='grid-3 m-6 space-y-6'>
    <div className='pb-4'>
            <h1 className='text-2xl font-bold'>Institute</h1>
        </div>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
    </div>
   


    
    <div className='grid-4 m-6  space-y-6'>
        <h1 className='text-2xl font-bold'>Follow Us On</h1>
        <div className='flex flex-row space-x-6 mt-4'>
            <SiFacebook className='text-3xl'/>
            <FaInstagram className='text-3xl'/>
            <GrLinkedin className='text-3xl'/>
            <FaXTwitter className='text-3xl'/>
            <FaYoutube className='text-3xl'/>
        </div>
        {/* news letter */}
        <div className='pt-6 '>
            <h1 className='text-xl font-bold'>Newsletter</h1>
            <div className='pt-6 flex flex-col space-y-8 '>
                <div>
                <input type="text" placeholder='Name' className='p-2 px-6 w-[320px] rounded-full text-black'/>

                </div>
            

            <div className='relative '>
            <input type="text" placeholder='Email Address'  className='text-black p-2 px-6 w-[320px] rounded-full' />
            <button className='absolute left-[216px] top-1  w-[100px] p-1 text-center rounded-full bg-[#390101]'>Enroll Now</button>

            </div>
            
            </div>

        </div>
        {/* news-end */}

        </div>
        {/* grid-4 end */}
    
    </div>

    <div className='flex flex-row justify-center items-center pt-6'>
        <h1>KIT Global technologies © All Rights Reserved</h1>

    </div>

    </div>
  )
}

export default Footer;
