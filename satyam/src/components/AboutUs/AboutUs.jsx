import React from 'react';
import "./AboutUs.css";
import aboutus from '../../../images/aboutus.jpg';
import founder from '../../../images/founder.png';
import chairperson from '../../../images/chairperson.png';
import secretary from '../../../images/secretary.png';
import TopNav from '../TopNav/TopNav';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';


const AboutUs = () => {
  return (
    <div className=''>
      <TopNav/>
      <NavBar/>
      {/* top image */}
      <div className='mt-4 md:mt-0'>
        <img src={aboutus} alt="" className='w-full h-[350px]'/>
      </div>

      {/* container */}
         <div className=' m-2 mt-10  md:mt-0 md:m-20 '>
          {/* flex container */}
        <div className='flex flex-col md:flex-row'>
          {/* grid for contents */}
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-0 place-items-center'>
          {/* first content */}
          <div className='grid-1 '>
          <img src={founder} alt="" className='w-72 h-72 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl' />
          <div className='space-y-4'>
            <h1 className='p-3 bg-rose-950 text-white  text-center text-lg border-l-8 border-[#FFB629] w-[250px]   '>Founder Chairman</h1>
            <h1 className='text-red-800 text-2xl font-semibold '>Lion A Satyanarayana</h1>
          </div>

          </div>
         {/* second content */}
         <div className='grid-2 mt-6'>
          <div className='flex flex-col text-left'>
         <h1 className='text-zinc-800 text-3xl md:text-4xl font-normal  tracking-wide border-b-8 rounded-br-lg border-[#890000] inline-block p-2'>Founder Chairman’s Words</h1>
          <p className='mt-6 mb-2 text-lg  '>The first step in the real world Providing Education to students is the happiest and most good thing that I ever knew. One day I woke with my head raising with an important thought that the Strength of our country lies in its foundation. School Education is therefore rightly regarded as the base depending on which one's life structure takes shape.</p>

          <p className='text-lg  mb-2 '>The roots of our institute, Satyam International School has been prudentially laid extrapolating the basic Inspiration from Vedas where education is rightly defined in three principles - Sravana, Manana and Niddhyaasana. Sravana which means listening, Manana which means assimilating it, Niddhyaasana which means living up to it.</p>

          <p className='text-lg mb-2  '>By the virtue I have been placed in such a responsible position of contributing into the nation building exercise through education. I am overwhelmed with both emotions & responsibilities. But I do overcome that by providing you the best education you can dream of and you must fulfil your own dreams, your parent's wish and the institution's goal and the nation's pride.</p>

         </div>

        </div>
        </div>


        
          
        
          
          

        </div>
       
        </div>



         {/* Second container */}
         <div className=' m-2 mt-10  md:mt-0 md:m-20 '>
          {/* flex container */}
        <div className='flex flex-col md:flex-row'>
          {/* grid for contents */}
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-0 place-items-center'>
          {/* first content */}
         <div className='grid-1'>
          <div className='flex flex-col text-left'>
         <h1 className='text-zinc-800  text-3xl md:text-4xl font-normal  tracking-wide border-b-8 rounded-br-lg border-[#890000] inline-block p-2'>Chairperson’s Words</h1>
          <p className='mt-6 mb-2 text-lg  '>Our institution was formed by a team of Service-oriented individuals with the aim to promote education and culture in all aspects in order to achieve and fulfill the mission statement that we believe in.</p>

          <p className='text-lg  mb-2 '>As an established and highly esteemed institution, we maintain an utmost academic standard, incorporated with the conduct of discipline, thereby achieving remarkable and excellent </p>

          <p className='text-lg mb-2 '>percentage of results. We firmly believe that education is the key to a nation's progress with this; we will take it as our bounded duty to provide the best academic training a student can possibly get. </p>

          <p className='text-lg mb-2 '>The hard work of today is the triumph of the future. </p>

          <p className='text-lg mb-2 '>As the chairman of this institution, I anticipate the full participation and cooperation of the students and parents to make it possible for us to transform those dreams to reality.</p>

         </div>

        </div>
        {/* second content */}
        <div className='grid-2 md:order-last order-first mt-10  md:mt-0 '>
          <img src={chairperson} alt="" className='w-72 h-72 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl' />
          <div className='space-y-4'>
            <h1 className='p-3 bg-rose-950 text-white  text-center text-lg border-l-8 border-[#FFB629] w-[250px]   '>Chairperson</h1>
            <h1 className='text-red-800 text-2xl font-semibold '>Mrs. R. Surekha</h1>
          </div>

          </div>
        </div>


        
          
        
          
          

        </div>
       
        </div>




        {/*Third container */}
        <div className=' m-2 mt-10  md:mt-0 md:m-20 '>
          {/* flex container */}
        <div className='flex flex-col md:flex-row'>
          {/* grid for contents */}
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-0 place-items-center'>
          {/* first content */}
          <div className='grid-1 '>
          <img src={secretary} alt="" className='w-72 h-72 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl' />
          <div className='space-y-4'>
            <h1 className='p-3 bg-rose-950 text-white  text-center text-lg border-l-8 border-[#FFB629] w-[250px]   '>Secretary & Correspondent</h1>
            <h1 className='text-red-800 text-2xl font-semibold '>R. Jagadeesh Kumar</h1>
          </div>

          </div>
         {/* second content */}
         <div className='grid-2 mt-10  md:mt-0'>
          <div className='flex flex-col text-left'>
         <h1 className='text-zinc-800 text-3xl md:text-4xl font-normal  tracking-wide border-b-8 rounded-br-lg border-[#890000] inline-block p-2'>Secretary & Correspondent</h1>
          <p className='mt-6 mb-2 text-lg  '>The fear for just an excellence in academic lines and of new experience among students kills the spirit of adventure in the student's education life.</p>

          <p className='text-lg  mb-2 '>At Satyam International School the purpose of education is not to produce mere scholars, technicians and job hunters, but integrated youngsters who are free of fear.</p>

          <p className='text-lg mb-2  '>We design academic curriculum in a way which make them to use intuition as well as logic to produce ideas and make decisions.</p>

          <p className='text-lg mb-2  '>We impart strength and efficiency by providing enriched educational opportunities and personally fulfilling and challenging academic curriculum that prepare all aspirants for productive roles in society and bring perfection in entirety which projects our vision.</p>

         </div>

        </div>
        </div>


        
          
        
          
          

        </div>
       
        </div>






<Footer/>

      </div>
      
    
      
    
  )
}

export default AboutUs;
