import React from 'react';
import TopNav from '../TopNav/TopNav';
import NavBar from '../NavBar/NavBar';
import  main_banner from '../../../images/main_banner.jpg';
import Footer from '../Footer/Footer';
import  teaching_methodology from '../../../images/teaching_methodology.png';
import  slide1 from '../../../images/slide1.png';

const Teaching_Methodology = () => {
  return (
    <div>
       <TopNav/>
      <NavBar/>

      <div className='mt-4 md:mt-0'>
        <img src={main_banner} alt="" className='w-full h-[350px]' />
      </div>

      <div className='m-6 md:m-20'>
      <h1 className='text-zinc-800 text-3xl md:text-4xl font-normal  tracking-wide border-b-8 rounded-br-lg border-[#890000] inline-block p-2 w-[60%]'>Teaching Methodology</h1>
      
      {/* container 1 */}
      <div className=' m-2 mt-10 '>
        {/* flex container */}
        <div className='flex flex-col md:flex-row '>
          {/* grid for contents */}
          <div className=' grid grid-cols-1 md:grid-cols-2 gap-[100px] place-items-center m-4'>
            {/* first content */}
            <div className='grid-1 mt-6 '>
              <div className='flex flex-col text-left'>
                

                <p className='mt-6 mb-2 text-lg' data-aos="slide-up">Satyam International School is in accreditation with EduComp Smart class to bring about a complete transformation in classrooms. The Science teacher while explaining how a DNA replicates is able to show the class a 3D animation of the DNA replication process on a large screen Similarly the History teacher shows the class a virtual walk through of the Harappan Civilization. Teachers will explain the fine points of the process, zoom in to show the relevant visuals freeze and annotate when and where she needs to emphasize.</p>

                <p className='text-lg  mb-2' data-aos="slide-up">Every child gets a visual input on how it happens and the concepts are well understood and internalised. Towards the end of the class, every teacher displays a set of questions on a large screen; every child in class gets ready to answer the questions with their personal answering device - SAS.</p>


                

                
                
                


              </div>

            </div>

             {/* second content */}
            <div className='grid-2 order-first md:order-last'>
              {/*Main image container */}
          <div className='relative flex '>
            
            <img src={teaching_methodology} alt="" className='md:w-[70%]  w-[90%]' data-aos="slide-left"/>
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

export default Teaching_Methodology;
