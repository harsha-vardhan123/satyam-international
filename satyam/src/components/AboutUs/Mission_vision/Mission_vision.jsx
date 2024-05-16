import React from 'react';
import "./Mission_vision.css";
import VM from '../../../../images/vision-mission.jpg';
import TopNav from '../../TopNav/TopNav';
import NavBar from '../../NavBar/NavBar';
import founder from '../../../../images/founder.png';
import Footer from '../../Footer/Footer';
import mission from '../../../../images/mission.png';
import mission2 from '../../../../images/mission2.jpg';
import vision from '../../../../images/vision.jpg';
import vision2 from '../../../../images/vision2.png';

const Mission_vision = () => {
  return (
    <div>
      <TopNav />
      <NavBar />
      {/* top image */}
      <div className='mt-4 md:mt-0'>
        <img src={VM} alt="" className='w-full h-[350px]' />
      </div>

                                                  {/* Mission */}

      {/* 1st container */}
      <div className=' m-2 mt-10  md:mt-20 md:m-20 '>
          {/* flex container */}
        <div className='flex flex-col md:flex-row '>
          {/* grid for contents */}
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center m-4'>
          {/* first content */}
         <div className='grid-1'>
          <div className='flex flex-col text-left'>
         <h1 className='text-zinc-800  text-3xl md:text-4xl font-normal  tracking-wide border-b-8 rounded-br-lg border-[#890000] inline-block p-2 w-[50%]'>Our Mission</h1>


          <p className='mt-6 mb-2 text-lg  '>These days, despite a huge increase in the number of schools, the quality of education haunts the parents in selecting a school where the child is unable to meet the expectation of the "Minimum Level of Learning”. </p>

          <p className='text-lg  mb-2 '>Satyam International school believes that the "Destiny of India is been shaped in the Classrooms". So it's extremely important to provide highly eminent education to the students to pertain them in their real life.  </p>

          <p className='text-lg mb-2 '>We in Satyam International School provide education in an innovative way where children just don't see it as a source to outdo in the examination but for the escalation of phenomenal knowledge in all their respective interests. </p>

        

         </div>

        </div>
        {/* second content */}
        <div className='grid-2 md:order-last order-first mt-10  md:mt-0  '>
          {/*Main image container */}
          <div className='relative flex md:justify-end justify-center'>
            
            <img src={mission} alt="" className='md:w-[55%] w-[80%] '/>
            <div className='absolute -bottom-[30px] left-[150px]  w-[260px] h-[200px] bg-white'>
            <div className='absolute top-4 md:top-4 left-4 md:left-14 md:right-4 '>
              <img src={mission2} alt="" className='w-[200px] h-[180px]' />
            </div>
            </div>
            

          
            
          </div>
          
          

          </div>
        </div>


        
          
        
          
          

        </div>
       
        </div>



                                                {/* vision */}
      {/* container 2 */}
      <div className=' m-2 mt-10  md:mt-20 md:m-20 '>
        {/* flex container */}
        <div className='flex flex-col md:flex-row '>
          {/* grid for contents */}
          <div className=' grid grid-cols-1 md:grid-cols-2 gap-20 place-items-center m-4'>
            {/* first content */}
            <div className='grid-1 '>
              {/*Main image container */}
          <div className='relative flex '>
            
            <img src={vision} alt="" className='md:w-[60%]  w-[90%] '/>
            <div className='absolute -bottom-[100px] left-20  w-[300px] md:w-[360px] h-[200px] bg-white'>
            <div className='absolute top-4 md:top-4 left-4 md:left-4 md:right-4 '>
              <img src={vision2} alt="" className='w-[300px] md:w-[320px] h-[130px]' />
            </div>
            </div>
            

          
            
          </div>

            </div>
            {/* second content */}
            <div className='grid-2 mt-6'>
              <div className='flex flex-col text-left'>
                <h1 className='text-zinc-800 text-3xl md:text-4xl font-normal  tracking-wide border-b-8 rounded-br-lg border-[#890000] inline-block p-2 w-[50%]'>Our Vision</h1>

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

export default Mission_vision;
