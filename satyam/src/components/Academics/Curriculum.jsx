import React from 'react';
import TopNav from '../TopNav/TopNav';
import NavBar from '../NavBar/NavBar';
import  curriculum_banner from '../../../images/curiculum_banner.jpg';
import  curriculum1 from '../../../images/curriculum1.png';
import  slide1 from '../../../images/slide1.png';
import Footer from '../Footer/Footer';

const Curriculum = () => {
  return (
    <div>
      <TopNav/>
      <NavBar/>
      <div className='mt-4 md:mt-0'>
        <img src={curriculum_banner} alt="" className='w-full h-[350px]' />
      </div>

      <div className='m-6 md:m-20'>
      <h1 className='text-zinc-800 text-3xl md:text-4xl font-normal  tracking-wide border-b-8 rounded-br-lg border-[#890000] inline-block p-2 w-[45%]'>Curriculum</h1>
      
      {/* container 1 */}
      <div className=' m-2 mt-10 '>
        {/* flex container */}
        <div className='flex flex-col md:flex-row '>
          {/* grid for contents */}
          <div className=' grid grid-cols-1 md:grid-cols-2 gap-20 place-items-center m-4'>
            {/* first content */}
            <div className='grid-1 '>
              {/*Main image container */}
          <div className='relative flex '>
            
            <img src={curriculum1} alt="" className='md:w-[70%]  w-[90%] '  data-aos="slide-right"/>
            <div className='absolute -bottom-[100px] left-20  w-[300px] md:w-[360px] h-[200px] bg-white' data-aos="slide-up" >
            <div className='absolute top-4 md:top-4 left-4 md:left-4 md:right-4 '>
              <img src={slide1} alt="" className='w-[250px] md:w-[230px] h-[160px]' data-aos="slide-up" />
            </div>
            </div>
            

          
            
          </div>

            </div>
            {/* second content */}
            <div className='grid-2 mt-6'>
              <div className='flex flex-col text-left'>
                

                <p className='mt-6 mb-2 text-lg  '  data-aos="slide-up">Conventional education makes independent thinking extremely difficult. Conventional education does not prepare young people adequately for the risks, responsibilities and challenges that they will face in the fast-growing world.</p>

                <p className='text-lg  mb-2 ' data-aos="slide-up">The child is curious. He/she wants to make sense out of things, find out how things work, and do what he/she can see other people doing. Keeping this in mind, Satyam International School has joined hands with Xseed, to bring the experiential learning concept to life through its practical approach towards syllabus, teacher training and assessment.</p>

                <p className='text-lg mb-2  ' data-aos="slide-up">The curriculum is based on the guidelines of the National Educational Policy (NEP) - 2020. The syllabus seamlessly integrates with CBSE, ICSE, state boards or even international certifications such as IGCSE.</p>

                

                
                
                


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

export default Curriculum;
