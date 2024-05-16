import React from 'react'
import TopNav from '../TopNav/TopNav';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import affiliation from '../../../images/affiliation.png';
import affiliation_banner from '../../../images/affiliation_banner.jpg';

const Affiliation = () => {
  return (
    <div>
      <TopNav/>
      <NavBar/>
      <div className='mt-4 md:mt-0'>
        <img src={affiliation_banner} alt="" className='w-full h-[350px]' />
      </div>
       
       <div className='container mt-20'>
       <h1 className='text-zinc-800 text-3xl md:text-4xl font-normal  tracking-wide border-b-8 rounded-br-lg border-[#890000] inline-block p-2 w-[40%]'>Affiliation</h1>
       </div>
       <div className="container mt-20">
        <div className='flex flex-col  justify-center items-center'>
        <img src={affiliation} alt="" />
        <p className='text-center text-lg mt-10 mb-20'>Satyam International School is affiliated to Central Board of Secondary Education (CBSE), New Delhi. Affiliation No ; 830478 and School Code : 45397 and comes under Bengaluru CBSE Regional office. So far 6 batches of Class X students undergone Board exams and flied with 100 % results.</p>

        </div>
        
       </div>
       <Footer/>

      

      
    </div>
  )
}

export default Affiliation;
