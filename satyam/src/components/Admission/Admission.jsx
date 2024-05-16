import React from 'react';
import slide1 from '../../../images/slide1.png';
import TopNav from '../TopNav/TopNav';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import './Admission.css';
import { NavLink } from 'react-router-dom';

const Admission = () => {
  return (
    <div>
      <TopNav />
      <NavBar />
      {/* Main Banner */}
      <div className='mt-4 md:mt-0'>
        <img src={slide1} alt="" className='w-full h-[350px]' />
      </div>

      <div className='m-4 md:m-20 mb-20 md:mb-20'>
        <h1 className='text-zinc-800  text-2xl md:text-3xl font-normal  tracking-wide border-b-8 rounded-br-lg border-[#890000] md:w-[40%] inline-block p-2'>Admission Process</h1>

        <p className='mt-6 md:mt-8 text-xl'>For any student who wishes to join Satyam International School, the school admission process is laid out in a stepwise manner.</p>


        {/* content */}
        <div className=' flex flex-col gap-10 mt-10 md:mt-10'>

          {/* 1st */}
          <div className='flex flex-col md:flex-row gap-4 md:gap-10 items-center'>
          <div className='icons'>
            <div className='inside'>
              <p className='sl'>01</p>
            </div>
          </div>
          <p className='text-xl text-center md:text-left md:w-[90%]'>Parents fill the Enquiry Form on our website.</p>
          </div>
          {/* end */}

          {/* 2nd */}
          <div className='flex flex-col md:flex-row gap-4 md:gap-10 items-center'>
          <div className='icons'>
            <div className='inside'>
              <p className='sl'>02</p>
            </div>
          </div>
          <p className='text-xl text-center md:text-left md:w-[90%]'>Upon submission of the Enquiry Form, the parents receive communication regarding their location and contact details for the next steps.</p>
          </div>
          {/* end */}

          {/* 3rd */}
          <div className='flex flex-col md:flex-row gap-4 md:gap-10 items-center'>
          <div className='icons'>
            <div className='inside'>
              <p className='sl'>03</p>
            </div>
          </div>
          <p className='text-xl text-center md:text-left md:w-[90%]'>Our school counselor will connect with the parent over call and share information about the school. fee structure, virtual counseling or phone counseling, campus visit, etc.</p>
          </div>
          {/* end */}

          {/* 4th */}
          <div className='flex flex-col md:flex-row gap-4 md:gap-10 items-center'>
          <div className='icons'>
            <div className='inside'>
              <p className='sl'>04</p>
            </div>
          </div>
          <p className='text-xl text-center md:text-left md:w-[90%]'>The student seeking admission has to undergo a written test conducted by the school (Written test will based on the subjects of the present class which the student is studying). If the student clears the written test, parent is then requested to fill the Application from School Admission Application Form or you can collect the application from school office.</p>
          </div>
          {/* end */}

          {/* 5th */}
          <div className='flex flex-col md:flex-row gap-4 md:gap-10 items-center'>
          <div className='icons'>
            <div className='inside'>
              <p className='sl'>05</p>
            </div>
          </div>
          <p className='text-xl text-center md:text-left md:w-[90%]'>Parents are then requested to submit the Application Form for their child’s school admission with all necessary documents.</p>
          </div>
          {/* end */}

          {/* 6th */}
          <div className='flex flex-col md:flex-row gap-4 md:gap-10 items-center'>
          <div className='icons'>
            <div className='inside'>
              <p className='sl'>06</p>
            </div>
          </div>
          <p className='text-xl text-center md:text-left md:w-[90%]'>Parents can confirm the admission by paying Rs. 1500/- towards Registration amount and Rs 15,000.00 towards one time Admission Blocking amount.</p>
          </div>
          {/* end */}

          {/* 7th */}
          <div className='flex flex-col md:flex-row gap-4 md:gap-10 items-center'>
          <div className='icons'>
            <div className='inside'>
              <p className='sl'>07</p>
            </div>
          </div>
          <p className='text-xl text-center md:text-left md:w-[90%]'>The child enrollment number is generated and the admission process successfully comes to an end.</p>
          </div>
          {/* end */}

          <NavLink to="/admissionform">
          <div className='flex justify-center items-center mt-10'>
            <button className='rounded-3xl bg-orange-400 p-4 text-white text-lg font-medium hover:shadow-xl hover:bg-orange-500 hover:scale-105'>Admissions Form</button>
          </div>
          </NavLink>
          

         
          

          


        </div>



      </div>
      <Footer/>
    </div>
  )
}

export default Admission
