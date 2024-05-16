import React from 'react'
import TopNav from '../TopNav/TopNav';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import slide1 from '../../../images/slide1.png';
import vector from '../../../images/Vector.svg';
import dot1 from '../../../images/Ellipse_29.svg';
import dot2 from '../../../images/Ellipse_30.svg';
import dot3 from '../../../images/Ellipse_31.svg';
import './FacilitiesNav.css';
import fac2 from '../../../images/fac2.svg';
import fac3 from '../../../images/fac3.svg';
import fac4 from '../../../images/fac4.svg';
import fac5 from '../../../images/fac5.svg';
import fac6 from '../../../images/fac6.svg';
import lab from '../../../images/lab.png';
import library from '../../../images/Library.png';
import sports1 from '../../../images/sports1.png';
import sports2 from '../../../images/sports2.png';
import hostel from '../../../images/hostel.png';
import bus from '../../../images/bus.webp';
import canteen from '../../../images/canteen.png';
import { Link } from 'react-scroll';

const FacilitiesNav = () => {
  return (
    <div>
      <TopNav />
      <NavBar />
      {/* Main Banner */}
      <div className='mt-4 md:mt-0'>
        <img src={slide1} alt="" className='w-full h-[350px]' />
      </div>

      {/* facilities Icon */}
      <div className='flex flex-col md:flex-row justify-center items-center justify-evenly space-y-20 md:space-y-0  mt-2 mb-20 p-16 '>


        {/* 1st Facilities */}
        <Link to="section1"smooth={true} duration={500}>
        <div  className='fac1'>
          <button className='btn'>
            <img src={vector} alt="" className='icon' />
            <div className='dot1_container'>
              <img src={dot1} alt="" className='dot1' />
            </div>
            <div className='dot2_container '>
              <img src={dot2} alt="" className='dot2' />
            </div>
            <div className='dot3_container'>
              <img src={dot3} alt="" className='dot3' />
            </div>

          </button>
          <h1 className='headingf' >Lab</h1>
        </div>
        </Link>
        {/* end */}

        {/* 2nd Facilities */}
        <Link to="section2"smooth={true} duration={500}>
        <div className='fac1'>
          <button className='btn'>
            <img src={fac2} alt="" className='icon' />
            <div className='dot1_container'>
              <img src={dot1} alt="" className='dot1' />
            </div>
            <div className='dot2_container '>
              <img src={dot2} alt="" className='dot2' />
            </div>
            <div className='dot3_container'>
              <img src={dot3} alt="" className='dot3' />
            </div>

          </button>
          <h1 className='headingf2' >Library</h1>
        </div>
        </Link>
        {/* end */}

        {/* 3rd Facilities */}
        <Link to="section3"smooth={true} duration={500}>
        <div className='fac1'>
          <button className='btn'>
            <img src={fac3} alt="" className='icon' />
            <div className='dot1_container'>
              <img src={dot1} alt="" className='dot1' />
            </div>
            <div className='dot2_container '>
              <img src={dot2} alt="" className='dot2' />
            </div>
            <div className='dot3_container'>
              <img src={dot3} alt="" className='dot3' />
            </div>

          </button>
          <h1 className='headingf3' >Sports</h1>
        </div>
        </Link>
        {/* end */}

        {/* 4th Facilities */}
        <Link to="section4"smooth={true} duration={500}>
        <div className='fac1'>
          <button className='btn'>
            <img src={fac4} alt="" className='icon' />
            <div className='dot1_container'>
              <img src={dot1} alt="" className='dot1' />
            </div>
            <div className='dot2_container '>
              <img src={dot2} alt="" className='dot2' />
            </div>
            <div className='dot3_container'>
              <img src={dot3} alt="" className='dot3' />
            </div>

          </button>
          <h1 className='headingf4' >Hostel</h1>
        </div>
        </Link>
        {/* end */}

        {/* 5th Facilities */}
        <Link to="section5"smooth={true} duration={500}>
        <div className='fac1'>
          <button className='btn'>
            <img src={fac5} alt="" className='icon' />
            <div className='dot1_container'>
              <img src={dot1} alt="" className='dot1' />
            </div>
            <div className='dot2_container '>
              <img src={dot2} alt="" className='dot2' />
            </div>
            <div className='dot3_container'>
              <img src={dot3} alt="" className='dot3' />
            </div>

          </button>
          <h1 className='headingf5' >Transportation</h1>
        </div>
        </Link>
        {/* end */}

        {/* 6th Facilities */}
        <Link to="section6"smooth={true} duration={500}>
        <div className='fac1'>
          <button className='btn'>
            <img src={fac6} alt="" className='icon' />
            <div className='dot1_container'>
              <img src={dot1} alt="" className='dot1' />
            </div>
            <div className='dot2_container '>
              <img src={dot2} alt="" className='dot2' />
            </div>
            <div className='dot3_container'>
              <img src={dot3} alt="" className='dot3' />
            </div>

          </button>
          <h1 className='headingf6' >Canteen</h1>
        </div>
        </Link>
        {/* end */}

      </div>

      {/* first container */}
      <div id="section1" className='p-6 mt-10  md:mt-0 md:p-14 bg-[#E4D6A7]  bg-opacity-40 '>
        {/* flex container */}
        <div className='flex flex-col md:flex-row'>
          {/* grid for contents */}
          <div className=' grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-8 place-items-center'>
            {/* first content */}
            <div className='grid-1 p-2'>
              <div className='flex flex-col text-left'>
                <h1 className='text-zinc-800  text-3xl md:text-4xl font-normal  tracking-wide border-b-8 rounded-br-lg border-[#890000] w-[60%] inline-block p-2'>Lab Facilities</h1>
                <p className='mt-6 mb-2 text-lg  '>Satyam International School understood the way a child psychology will be in terms of education. We believe that wisdom and understanding are enthusiastic pursuits rather just having an academic record. So in this regard we established State-of-the-art laboratories in Biology, Chemistry, Geography, Mathematics and Physics for Senior School and a General Science laboratory.</p>

                <p className='text-lg  mb-2 '>Middle School Academic curriculum is so designed that laboratory experience will surely aid the students to promote central science education goals including understanding of concepts in science and its applications, scientific practical skills and problem solving abilities, scientific habits of mind, understanding of how science and scientists work, interest and motivation. </p>



              </div>

            </div>
            <div className='grid-2 order-first md:order-last'>
              {/*Main image container */}
              <div className='relative flex '>

                <img src={lab} alt="" className='md:w-[90%]  w-[90%]' data-aos="slide-left" />
                <div data-aos="slide-up" className='absolute -bottom-[40px] left-[150px]  w-[250px] md:w-[290px] h-[250px] bg-white'>
                  <div className='absolute top-2 md:top-2 left-2 md:left-2 right-2 md:right-2 '>
                    <img src={slide1} alt="" className='w-[300px] md:w-[290px] h-[230px]' data-aos="slide-up" />
                  </div>
                </div>




              </div>

            </div>
          </div>








        </div>

      </div>


      {/* second container */}
      <div id="section2" className='p-6 mt-10  md:mt-10 md:p-14'>
        {/* flex container */}
        <div className='flex flex-col md:flex-row'>
          {/* grid for contents */}
          <div className=' grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 '>
            {/* first content */}
            <div className='grid-1  p-2'>
              <div className='flex flex-col text-left justify-start'>
                <h1 className='text-zinc-800  text-3xl md:text-4xl font-normal  tracking-wide border-b-8 rounded-br-lg border-[#890000] w-[70%] inline-block p-2'>Library Facilities:</h1>
                <div className='relative flex mt-10 '>

                  <img src={library} alt="" className='md:w-[60%]  w-[90%]' data-aos="slide-right" />
                  <div data-aos="slide-up" className='absolute -bottom-[40px] left-[150px]  w-[250px] md:w-[290px] h-[250px] bg-white'>
                    <div className='absolute top-2 md:top-2 left-2 md:left-2 right-2 md:right-2 '>
                      <img src={slide1} alt="" className='w-[300px] md:w-[290px] h-[230px]' data-aos="slide-up" />
                    </div>
                  </div>
                </div>




              </div>

            </div>
            <div className='grid-2'>
              <div className='flex flex-col justify-center mt-20'>
                <p className='mt-6 mb-2 text-lg  '>Reading is just not an active mental process but also stimulates the right side of your brain. Reading opens one’s mind to new possibilities. It stretches one’s imagination in new and wonderful directions and takes your mind on wonderful journey through others lives.</p>

                <p className='text-lg  mb-2 '>Satyam International School believes in “what a school thinks about its library is a measure of what it feels about education”. So we have a senior and junior library that offers large collection of books on different subjects, reference materials and also subscribes several dailies to journals. </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* third container */}
      <div id="section3" className='p-6 mt-10  md:mt-10 md:p-14 bg-[#E4D6A7]  bg-opacity-40 '>
        {/* flex container */}
        <div className='flex flex-col md:flex-row'>
          {/* grid for contents */}
          <div className=' grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-8 place-items-center'>
            {/* first content */}
            <div className='grid-1 p-2'>
              <div className='flex flex-col text-left'>
                <h1 className='text-zinc-800  text-3xl md:text-4xl font-normal  tracking-wide border-b-8 rounded-br-lg border-[#890000] w-[60%] inline-block p-2'>Sports</h1>
                <p className='mt-6 mb-2 text-lg  '>The present day race for academic excellence has reduced the importance of a basic ingredient of the human life. As a result there is a disrupted physical and mental balance system among the students.</p>

                <p className='text-lg  mb-2 '>Modern parents have only a one sided view of developing their ward in the academic lines rather than imparting them on an all-round basis which is the prerequisite for modern life. </p>

                <p className='text-lg  mb-2 '>In this aspect Satyam International School is keen in repulsing away any distortions, and the most prominent are the sports. We have a provision for separate playgrounds for cricket, football and basketball. </p>

                <p className='text-lg  mb-2 '>Weekly 4-5 periods have been allotted to sports for every child. Apart from the regular PET periods, students have been encouraged to participate in sports activities like skating, cricket coaching etc after school hours, i.e., 3:30 pm to 5 pm. </p>


              </div>

            </div>
            <div className='grid-2 order-first md:order-last'>
              {/*Main image container */}
              <div className='relative flex '>

                <img src={sports1} alt="" className='md:w-[100%]  w-[90%]' data-aos="slide-left" />
                <div data-aos="slide-up" className='absolute -bottom-[100px] left-[150px]  w-[200px] md:w-[290px] h-[200px] bg-white'>
                  <div className='absolute top-2 md:top-2 left-2 md:left-2 right-2 md:right-2 '>
                    <img src={sports2} alt="" className='w-[300px] md:w-[290px] h-[180px]' data-aos="slide-up" />
                  </div>
                </div>




              </div>

            </div>
          </div>








        </div>
</div>

 {/* fourth container */}
 <div id="section4" className='p-6 mt-10  md:mt-10 md:p-14'>
        {/* flex container */}
        <div className='flex flex-col md:flex-row'>
          {/* grid for contents */}
          <div className=' grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 '>
            {/* first content */}
            <div className='grid-1  p-2'>
              <div className='flex flex-col text-left justify-start'>
                <h1 className='text-zinc-800  text-3xl md:text-4xl font-normal  tracking-wide border-b-8 rounded-br-lg border-[#890000] w-[70%] inline-block p-2'>Hostel:</h1>
                <div className='relative flex mt-10 '>

                  <img src={hostel} alt="" className='md:w-[60%]  w-[90%]' data-aos="slide-right" />
                  <div data-aos="slide-up" className='absolute -bottom-[40px] left-[150px]  w-[250px] md:w-[290px] h-[250px] bg-white'>
                    <div className='absolute top-2 md:top-2 left-2 md:left-2 right-2 md:right-2 '>
                      <img src={slide1} alt="" className='w-[300px] md:w-[290px] h-[230px]' data-aos="slide-up" />
                    </div>
                  </div>
                </div>




              </div>

            </div>
            <div className='grid-2'>
              <div className='flex flex-col justify-center mt-20'>
                <p className='mt-6 mb-2 text-lg  '>Our large campus facilitates separate hostels for boys and girls. Spacious and well-ventilated dormitories are designed for comfortable and collective living. </p>

                <p className='text-lg  mb-2 '> The hostilities live like one family and always care for one another. It is this quality among them that makes the hostel unique. </p>

                <p className='text-lg  mb-2 '> Each ward has their own individual bed space and large cupboards to keep their own belongings.  </p>


                <p className='text-lg  mb-2 '> There is a provision of a hot water facility for bathing and mineral water is provided 24x7. </p>

              </div>

            </div>
          </div>
        </div>
      </div>

{/* fifth container */}
<div id="section5" className='p-6 mt-10  md:mt-10 md:p-14 bg-[#E4D6A7]  bg-opacity-40 '>
        {/* flex container */}
        <div className='flex flex-col md:flex-row'>
          {/* grid for contents */}
          <div className=' grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 place-items-center'>
            {/* first content */}
            <div className='grid-1 p-2'>
              <div className='flex flex-col text-left'>
                <h1 className='text-zinc-800  text-3xl md:text-4xl font-normal  tracking-wide border-b-8 rounded-br-lg border-[#890000] w-[60%] inline-block p-2'>Transportation</h1>
                <p className='mt-6 mb-2 text-lg  '>Our transportation services encompass a seamless network of buses and vans that efficiently commute between our campus and Ballari city, extending their reach to the surrounding rural areas. </p>

                <p className='text-lg  mb-2 '>Designed with the utmost consideration for convenience, our transport facility is tailored specifically for day scholars, ensuring a hassle-free commuting experience.  </p>

                <p className='text-lg  mb-2 '>Our commitment is to provide a reliable and comfortable mode of transportation that not only connects our campus to the city and rural areas but also prioritizes the well-being and ease of our day scholars, mitigating any potential inconvenience in their daily commute. </p>



              </div>

            </div>
            <div className='grid-2 order-first md:order-last'>
              {/*Main image container */}
              <div className='relative flex justify-center '>

                <img src={bus} alt="" className='md:w-[90%]  w-[90%] ' />
                {/* <div  className='absolute -bottom-[200px] left-[150px]  w-[250px] md:w-[290px] h-[250px] bg-white'>
                  <div className='absolute top-2 md:top-2 left-2 md:left-2 right-2 md:right-2 '>
                    <img src={slide1} alt="" className='w-[300px] md:w-[290px] h-[230px]' data-aos="slide-up" />
                  </div>
                </div> */}




              </div>

            </div>
          </div>








        </div>

      </div>

      {/* sixth container */}
 <div id="section6" className='p-6 mt-10  md:mt-10 md:p-14 md:mb-10'>
        {/* flex container */}
        <div className='flex flex-col md:flex-row'>
          {/* grid for contents */}
          <div className=' grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 '>
            {/* first content */}
            <div className='grid-1  p-2'>
              <div className='flex flex-col text-left justify-start'>
                <h1 className='text-zinc-800  text-3xl md:text-4xl font-normal  tracking-wide border-b-8 rounded-br-lg border-[#890000] w-[70%] inline-block p-2'>Canteen:</h1>
                <div className='relative flex mt-10 '>

                  <img src={canteen} alt="" className='md:w-[60%]  w-[90%]' data-aos="slide-right" />
                  <div data-aos="slide-up" className='absolute -bottom-[40px] left-[150px]  w-[250px] md:w-[290px] h-[250px] bg-white'>
                    <div className='absolute top-2 md:top-2 left-2 md:left-2 right-2 md:right-2 '>
                      <img src={slide1} alt="" className='w-[300px] md:w-[290px] h-[230px]' data-aos="slide-up" />
                    </div>
                  </div>
                </div>




              </div>

            </div>
            <div className='grid-2'>
              <div className='flex flex-col justify-center mt-20'>
                <p className='mt-6 mb-2 text-lg  '>Our campus boasts a convenient shop and mess, attending to the requirements of both day scholars and hostel residents. </p>

                <p className='text-lg  mb-2 '> Upholding high standards of hygiene, our facilities offer delectable and nutritious meals.  </p>

                <p className='text-lg  mb-2 '> The emphasis is on freshness, maintaining cleanliness, and ensuring affordability. </p>


                <p className='text-lg  mb-2 '>  The food we provide isn't just a culinary delight; it's a commitment to quality, meeting the diverse needs of our students with both taste and health in mind. </p>

              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer/>


    </div>
  )
}

export default FacilitiesNav
