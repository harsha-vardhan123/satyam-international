import React from 'react';
import TopNav from '../TopNav/TopNav';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import  main_banner from '../../../images/main_banner.jpg';
import  slide1 from '../../../images/slide1.png';
import  theme_based_learning from '../../../images/theme_based_learning.png';

const Theme_Based_Learning = () => {
  return (
    <div>
       <TopNav/>
      <NavBar/>

      <div className='mt-4 md:mt-0'>
        <img src={main_banner} alt="" className='w-full h-[350px]' />
      </div>

      <div className='m-6 md:m-20'>
      <h1 className='text-zinc-800 text-3xl md:text-4xl font-normal  tracking-wide border-b-8 rounded-br-lg border-[#890000] inline-block p-2 w-[60%]'>Theme Based Learning</h1>
      
      {/* container 1 */}
      <div className=' m-2 mt-10 '>
        {/* flex container */}
        <div className='flex flex-col md:flex-row '>
          {/* grid for contents */}
          <div className=' grid grid-cols-1 md:grid-cols-2 gap-[100px] place-items-center m-4'>
            {/* first content */}
            <div className='grid-1 mt-6 '>
              <div className='flex flex-col text-left'>
                

                <p className='mt-6 mb-2 text-lg' data-aos="slide-up">Every child is Different...!</p>

                <p className='text-lg  mb-2' data-aos="slide-up">Research has shown that not everybody learns in the same way. Some prefer experiments, some like lectures, some like to analyse and make hypotheses while some like to feel and experience for themselves.Satyam International School jointly with XSEED uses a theme based approach to impart multiple skills to the child within the framework of a single concept, or theme. The themes chosen begin to familiarize the children with the world around them and aim for development in many areas simultaneously.</p>

                <p className='mt-6 mb-2 text-lg' data-aos="slide-up">Our assessment approach takes a wider view of the child's capabilities and ensures that the unique talents and skills of every child get showcased.</p>


                

                
                
                


              </div>

            </div>

             {/* second content */}
            <div className='grid-2 order-first md:order-last'>
              {/*Main image container */}
          <div className='relative flex '>
            
            <img src={theme_based_learning} alt="" className='md:w-[70%]  w-[90%]' data-aos="slide-left"/>
            <div className='absolute -bottom-[100px] left-20  w-[300px] md:w-[360px] h-[200px] bg-white' data-aos="slide-up">
            <div className='absolute top-4 md:top-4 left-4 md:left-4 md:right-4 '>
              <img src={slide1} alt="" className='w-[300px] md:w-[230px] h-[160px]' data-aos="slide-up" />
            </div>
            </div>
            

          
            
          </div>

            </div>
          </div>
        </div>


      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Theme_Based_Learning;
