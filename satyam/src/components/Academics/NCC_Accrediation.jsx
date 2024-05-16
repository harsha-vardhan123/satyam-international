import React from 'react';
import TopNav from '../TopNav/TopNav';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ncc from '../../../images/ncc.jpg';
import  main_banner from '../../../images/main_banner.jpg';

const NCC_Accrediation = () => {
  return (
    <div>
       <TopNav/>
      <NavBar/>

      <div className='mt-4 md:mt-0'>
        <img src={main_banner} alt="" className='w-full h-[350px]' />
      </div>

      <div className='container mt-20'>
       <h1 className='text-zinc-800 text-3xl md:text-4xl font-normal  tracking-wide border-b-8 rounded-br-lg border-[#890000] inline-block p-2 w-[40%]'>NCC Accrediation</h1>
       </div>
       <div className="container mt-20">
        <div className='flex flex-col  justify-center items-center'>
        <img src={ncc} alt="" />
        <p className='text-center text-lg mt-10 mb-20'>NCC Accreditation, short for National Cadet Corps Accreditation, is a recognition program in India aimed at evaluating and affirming the quality and standards of educational institutions affiliated with the National Cadet Corps. Accreditation signifies that an institution meets specified criteria related to infrastructure, training facilities, cadet activities, and overall management, ensuring adherence to NCC guidelines and promoting excellence in cadet training and development.</p>

        </div>
        
       </div>
       <Footer/>

    </div>
  )
}

export default NCC_Accrediation;
