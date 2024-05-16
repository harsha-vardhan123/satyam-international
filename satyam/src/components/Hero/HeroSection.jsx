import React, { useEffect, useState } from 'react'
import "./Hero.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';


const HeroSection = ({ images }) => {

  const [current,setCurrent] = useState(0);
  const [autoPlay,setAutoplay] = useState(true);

  const slideRight = ()=>{
    if(current === images.length - 1){
      setCurrent(0);
    }else{
      setCurrent(current+1);
    }
    
  }; 

  const slideLeft = ()=>{
    setCurrent(current - 1);
  }; 

  let timeOut = null;

  useEffect(()=>{
    timeOut = autoPlay && setTimeout(()=>{
      slideRight();
    },2500);
  })
  return (
    <div>
    <div className='carousel hidden md:block' onMouseEnter={()=>{setAutoplay(false);
      clearTimeout(timeOut);
    }}
    onMouseLeave={()=>{setAutoplay(true)}}
    >
      <div className="carousel_wrapper">
        {images.map((image, index) => {
          return <div key={index} className={index == current ? "carousel_card carousel_card-active":"carousel_card"} >
            <img className='card_image' src={image.image} alt="" />
            <div data-aos="flip-down" className="card_overlay">
              <h2 data-aos="fade-up" data-aos-duration="1200" className='card_title'>{image.heading}</h2>
              <p data-aos="fade-up" data-aos-duration="1500" className='card_description'>{image.description}</p>
             <Link to='/AboutUs'>
             <button data-aos="fade-up" data-aos-duration="2000" className='card_button'>{image.button}</button></Link> 
            </div>
          </div>
        })}

        <div className="carousel_pagination">
          {images.map((_,index)=>{
            return(
              <div key={index} className={index == current ? "pagination_dot pagination_dot-active":"pagination_dot"}
              onClick={()=> setCurrent(index)}>
                </div>
            )

          })}
        </div>

      </div>

    </div>

    {/* small screen hero section */}
    <div data-aos="flip-down" className='sm_hero_section md:hidden  m-4 '>
    <div className="sm_card bg-[#f6e3b7]  h-[460px] flex flex-col justify-center items-center space-y-6 rounded-2xl max-w-md mx-auto p-6 ">
    <h1 data-aos="fade-up" data-aos-duration="1200" className='text-3xl font-bold'>Our Rich History</h1>
      <p data-aos="fade-up" data-aos-duration="1500"  className='flex flex-col justify-center '>The strength of the structure lies in its foundation. School Education is therefore rightly regarded as the base depending on which one's life structure takes shape. This realization has resulted in the increasing demand of good schools in India. It is believed that based on the current and future manpower requirements of the various sectors, there is a huge demand-supply gap in the education space Said above, Mr. Lion A. Said above, Mr. Lion A....</p>
       <button data-aos="fade-up" data-aos-duration="1800" className='bg-[#ebaf2d] flex flex-inline justify-center items-center px-6 py-2 rounded-full text-center hover:shadow-xl hover:text-white '>Learn More</button> 

  

      
    </div>
    </div>
    </div>

  
  
  )
}

export default HeroSection;


   