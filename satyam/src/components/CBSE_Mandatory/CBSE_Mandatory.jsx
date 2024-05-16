import React from 'react';
import slide1 from '../../../images/slide1.png';
import TopNav from '../TopNav/TopNav';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const CBSE_Mandatory = () => {
  return (
    <div>
      <TopNav />
      <NavBar />
      {/* Main Banner */}
      <div className='mt-4 md:mt-0'>
        <img src={slide1} alt="" className='w-full h-[350px]' />
      </div>

      {/* table-1 */}
      <div className='m-4 md:m-20 mb-20 md:mb-20'>
        <h1 className='text-zinc-800  text-2xl md:text-3xl font-normal  tracking-wide border-b-8 rounded-br-lg border-[#890000] md:w-[60%] inline-block p-2'>A: GENERAL INFORMATION:</h1>


        {/* table-1 content */}
        <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 mt-10 md:mt-20 ">
          <thead>
            <tr>
              <th class="px-6 py-3 bg-[#EBAE2C] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">Sl. No</th>
              <th class="px-6 py-3 bg-[#EBAE2C] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">Information</th>
              <th class="px-6 py-3 bg-[#EBAE2C] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">Details</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-no-wrap">1</td>
              <td class="px-6 py-4 whitespace-no-wrap">NAME OF THE SCHOOL</td>
              <td class="px-6 py-4 whitespace-no-wrap">SATYAM INTERNATIONAL SCHOOL</td>
            </tr>
            <tr className='bg-[#e4d6a733]'>
              <td class="px-6 py-4 whitespace-no-wrap">2</td>
              <td class="px-6 py-4 whitespace-no-wrap">AFFILIATION NO.(IF APPLICABLE)</td>
              <td class="px-6 py-4 whitespace-no-wrap">830478</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-no-wrap">3</td>
              <td class="px-6 py-4 whitespace-no-wrap">SCHOOL CODE (IF APPLICABLE)(IF APPLICABLE)</td>
              <td class="px-6 py-4 whitespace-no-wrap">45397</td>
            </tr>
            <tr className='bg-[#e4d6a733]'>
              <td class="px-6 py-4 whitespace-no-wrap">4</td>
              <td class="px-6 py-4 whitespace-no-wrap">COMPLETE ADDRESS WITH PIN CODE</td>
              <td class="px-6 py-4 whitespace-no-wrap">SATYAM INTERNATIONAL SCHOOL, AFTER 2ND CANAL, KAPPAGAL VILLAGE ROAD, BELLARY-583103</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-no-wrap">5</td>
              <td class="px-6 py-4 whitespace-no-wrap">PRINCIPAL NAME & QUALIFICATION</td>
              <td class="px-6 py-4 whitespace-no-wrap">GINA GRACE (M.Com B.Ed)</td>
            </tr>
            <tr className='bg-[#e4d6a733]'>
              <td class="px-6 py-4 whitespace-no-wrap">6</td>
              <td class="px-6 py-4 whitespace-no-wrap">SCHOOL EMAIL ID</td>
              <td class="px-6 py-4 whitespace-no-wrap">kumar.jagadeesh123@gmail.com</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-no-wrap">7</td>
              <td class="px-6 py-4 whitespace-no-wrap">CONTACT DETAILS (LANDLINE/MOBILE)</td>
              <td class="px-6 py-4 whitespace-no-wrap">+91 809538616</td>
            </tr>

          </tbody>
        </table>
        </div>
        

      </div>

      {/* table-2 */}
      <div className='m-4 md:m-20 mb-20 md:mb-20'>
        <h1 className='text-zinc-800  text-2xl md:text-3xl font-normal  tracking-wide border-b-8 rounded-br-lg border-[#890000] md:w-[60%] inline-block p-2'>B: DOCUMENTS AND INFORMATION:</h1>


        {/* table */}
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200 mt-10 md:mt-20">
            <thead>
              <tr>
                <th class="px-6 py-3 bg-[#EBAE2C] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">Sl. No</th>
                <th class="px-6 py-3 bg-[#EBAE2C] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">Information</th>
                <th class="px-6 py-3 bg-[#EBAE2C] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">Uploaded Documents</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-4 whitespace-no-wrap">1</td>
                <td class="px-6 py-4 whitespace-no-wrap">COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY</td>
                <td class="px-6 py-4 whitespace-no-wrap">View</td>
              </tr>
              <tr className='bg-[#e4d6a733]'>
                <td class="px-6 py-4 whitespace-no-wrap">2</td>
                <td class="px-6 py-4 whitespace-no-wrap">COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE</td>
                <td class="px-6 py-4 whitespace-no-wrap">View</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-no-wrap">3</td>
                <td class="px-6 py-4 whitespace-no-wrap">COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT</td>
                <td class="px-6 py-4 whitespace-no-wrap">View</td>
              </tr>
              <tr className='bg-[#e4d6a733]'>
                <td class="px-6 py-4 whitespace-no-wrap">4</td>
                <td class="px-6 py-4 whitespace-no-wrap">COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT’S RENEWAL IF APPLICABLE</td>
                <td class="px-6 py-4 whitespace-no-wrap">View</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-no-wrap">5</td>
                <td class="px-6 py-4 whitespace-no-wrap">COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE</td>
                <td class="px-6 py-4 whitespace-no-wrap">View</td>
              </tr>
              <tr className='bg-[#e4d6a733]'>
                <td class="px-6 py-4 whitespace-no-wrap">6</td>
                <td class="px-6 py-4 whitespace-no-wrap">COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY</td>
                <td class="px-6 py-4 whitespace-no-wrap">View</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-no-wrap">7</td>
                <td class="px-6 py-4 whitespace-no-wrap">COPY OF THE DEO CERTIFICATE SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATIONOR SELF CERTIFICATION BY SCHOOL</td>
                <td class="px-6 py-4 whitespace-no-wrap">View</td>
              </tr>
              <tr className='bg-[#e4d6a733]'>
                <td class="px-6 py-4 whitespace-no-wrap">8</td>
                <td class="px-6 py-4 whitespace-no-wrap">COPIES OF VALID WATER, HEALTH, AND SANITATION CERTIFICATES</td>
                <td class="px-6 py-4 whitespace-no-wrap">View</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-no-wrap">9</td>
                <td class="px-6 py-4 whitespace-no-wrap">COPY OF FEE STRUCTURE OF SCHOOL 2023-23</td>
                <td class="px-6 py-4 whitespace-no-wrap">View</td>
              </tr>
              <tr className='bg-[#e4d6a733]'>
                <td class="px-6 py-4 whitespace-no-wrap">10</td>
                <td class="px-6 py-4 whitespace-no-wrap">COPY OF PTA LIST 2023-24</td>
                <td class="px-6 py-4 whitespace-no-wrap">View</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-no-wrap">11</td>
                <td class="px-6 py-4 whitespace-no-wrap">COPY OF SMC LIST 2023-24</td>
                <td class="px-6 py-4 whitespace-no-wrap">View</td>
              </tr>
              <tr className='bg-[#e4d6a733]'>
                <td class="px-6 py-4 whitespace-no-wrap">12</td>
                <td class="px-6 py-4 whitespace-no-wrap">COPY OF ACADEMIC CALENDAR 2023-24</td>
                <td class="px-6 py-4 whitespace-no-wrap">View</td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-no-wrap">13</td>
                <td class="px-6 py-4 whitespace-no-wrap">MANDATORY PUBLIC DISCLOSURE</td>
                <td class="px-6 py-4 whitespace-no-wrap">View</td>
              </tr>

            </tbody>
          </table>

        </div>
        

      </div>
        {/* table-1 */}
        <div className='m-4 md:m-20 mb-20 md:mb-20'>
        <h1 className='text-zinc-800  text-2xl md:text-4xl font-normal  tracking-wide border-b-8 rounded-br-lg border-[#890000] md:w-[60%] inline-block p-2'>C: RESULT AND ACADEMICS:</h1>

        <h2 className='text-zinc-800  text-2xl md:text-3xl font-normal  tracking-wide  mt-8 md:mt-8'>Result Class: X</h2>


        {/* table-1 content */}
        <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 mt-10 md:mt-12 ">
          <thead>
            <tr>
              <th class="px-6 py-3 bg-[#EBAE2C] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">Sl. No</th>
              <th class="px-6 py-3 bg-[#EBAE2C] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">Year</th>
              <th class="px-6 py-3 bg-[#EBAE2C] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">No. of Registered Students</th>
              <th class="px-6 py-3 bg-[#EBAE2C] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">No. of Students Passed</th>
              <th class="px-6 py-3 bg-[#EBAE2C] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">Pass Percentage</th>
              <th class="px-6 py-3 bg-[#EBAE2C] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">Remarks</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-no-wrap">1</td>
              <td class="px-6 py-4 whitespace-no-wrap">2016</td>
              <td class="px-6 py-4 whitespace-no-wrap">74</td>
              <td class="px-6 py-4 whitespace-no-wrap">74</td>
              <td class="px-6 py-4 whitespace-no-wrap">100</td>
              <td class="px-6 py-4 whitespace-no-wrap">NILL</td>
            </tr>
            <tr className='bg-[#e4d6a733]'>
            <td class="px-6 py-4 whitespace-no-wrap">2</td>
              <td class="px-6 py-4 whitespace-no-wrap">2017</td>
              <td class="px-6 py-4 whitespace-no-wrap">91</td>
              <td class="px-6 py-4 whitespace-no-wrap">91</td>
              <td class="px-6 py-4 whitespace-no-wrap">100</td>
              <td class="px-6 py-4 whitespace-no-wrap">NILL</td>
            </tr>
            <tr>
            <td class="px-6 py-4 whitespace-no-wrap">3</td>
              <td class="px-6 py-4 whitespace-no-wrap">2018</td>
              <td class="px-6 py-4 whitespace-no-wrap">101</td>
              <td class="px-6 py-4 whitespace-no-wrap">101</td>
              <td class="px-6 py-4 whitespace-no-wrap">100</td>
              <td class="px-6 py-4 whitespace-no-wrap">NILL</td>
            </tr>
            <tr className='bg-[#e4d6a733]'>
            <td class="px-6 py-4 whitespace-no-wrap">4</td>
              <td class="px-6 py-4 whitespace-no-wrap">2019</td>
              <td class="px-6 py-4 whitespace-no-wrap">105</td>
              <td class="px-6 py-4 whitespace-no-wrap">105</td>
              <td class="px-6 py-4 whitespace-no-wrap">100</td>
              <td class="px-6 py-4 whitespace-no-wrap">NILL</td>
            </tr>
            <tr>
            <td class="px-6 py-4 whitespace-no-wrap">5</td>
              <td class="px-6 py-4 whitespace-no-wrap">2020</td>
              <td class="px-6 py-4 whitespace-no-wrap">141</td>
              <td class="px-6 py-4 whitespace-no-wrap">135</td>
              <td class="px-6 py-4 whitespace-no-wrap">95.75</td>
              <td class="px-6 py-4 whitespace-no-wrap">NILL</td>
            </tr>
           

          </tbody>
        </table>
        </div>

        {/* sub table */}
        <h2 className='text-zinc-800  text-2xl md:text-3xl font-normal  tracking-wide  mt-8 md:mt-8'>Result Class: XII</h2>

        <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 mt-10 md:mt-12 ">
          <thead>
            <tr>
              <th class="px-6 py-3 bg-[#EBAE2C] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">Sl. No</th>
              <th class="px-6 py-3 bg-[#EBAE2C] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">Year</th>
              <th class="px-6 py-3 bg-[#EBAE2C] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">No. of Registered Students</th>
              <th class="px-6 py-3 bg-[#EBAE2C] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">No. of Students Passed</th>
              <th class="px-6 py-3 bg-[#EBAE2C] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">Pass Percentage</th>
              <th class="px-6 py-3 bg-[#EBAE2C] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">Remarks</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-no-wrap">1</td>
              <td class="px-6 py-4 whitespace-no-wrap">2020</td>
              <td class="px-6 py-4 whitespace-no-wrap">NA</td>
              <td class="px-6 py-4 whitespace-no-wrap">NA</td>
              <td class="px-6 py-4 whitespace-no-wrap">NA</td>
              <td class="px-6 py-4 whitespace-no-wrap">NA</td>
            </tr>
          
           

          </tbody>
        </table>
        </div>
        
        

      </div>
        {/* table-1 */}
        <div className='m-4 md:m-20 mb-20 md:mb-20'>
        <h1 className='text-zinc-800  text-2xl md:text-4xl font-normal  tracking-wide border-b-8 rounded-br-lg border-[#890000] md:w-[60%] inline-block p-2'>D: STAFF (TEACHING)</h1>


        {/* table-1 content */}
        <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 mt-10 md:mt-20 ">
          <thead>
            <tr>
              <th class="px-6 py-3 bg-[#EBAE2C] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">Sl. No</th>
              <th class="px-6 py-3 bg-[#EBAE2C] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">Information</th>
              <th class="px-6 py-3 bg-[#EBAE2C] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">Details</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-no-wrap">1</td>
              <td class="px-6 py-4 whitespace-no-wrap">PRINCIPAL</td>
              <td class="px-6 py-4 whitespace-no-wrap">1</td>
            </tr>
            <tr className='bg-[#e4d6a733]'>
              <td class="px-6 py-4 whitespace-no-wrap">2</td>
              <td class="px-6 py-4 whitespace-no-wrap">TOTAL NO. OF TEACHERS</td>
              <td class="px-6 py-4 whitespace-no-wrap">44</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-no-wrap">3</td>
              <td class="px-6 py-4 whitespace-no-wrap">TEACHERS SECTION RATIO</td>
              <td class="px-6 py-4 whitespace-no-wrap">1.8</td>
            </tr>
            <tr className='bg-[#e4d6a733]'>
              <td class="px-6 py-4 whitespace-no-wrap">4</td>
              <td class="px-6 py-4 whitespace-no-wrap">DETAILS OF SPECIAL EDUCATOR</td>
              <td class="px-6 py-4 whitespace-no-wrap">T SUNKESWARARA REDDY</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-no-wrap">5</td>
              <td class="px-6 py-4 whitespace-no-wrap">DETAILS OF COUNSELLOR AND WELLNESS TEACHER</td>
              <td class="px-6 py-4 whitespace-no-wrap">CHRISLENE PALLAVI</td>
            </tr>
           

          </tbody>
        </table>
        </div>
        

      </div>
      {/* table-1 */}
      <div className='m-4 md:m-20 mb-20 md:mb-20'>
        <h1 className='text-zinc-800  text-2xl md:text-4xl font-normal  tracking-wide border-b-8 rounded-br-lg border-[#890000] md:w-[60%] inline-block p-2'>E: SCHOOL INFRASTRUCTURE:</h1>


        {/* table-1 content */}
        <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 mt-10 md:mt-20 ">
          <thead>
            <tr>
              <th class="px-6 py-3 bg-[#EBAE2C] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">Sl. No</th>
              <th class="px-6 py-3 bg-[#EBAE2C] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">Information</th>
              <th class="px-6 py-3 bg-[#EBAE2C] text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">Details</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-no-wrap">1</td>
              <td class="px-6 py-4 whitespace-no-wrap">TOTAL CAMPUS AREA OF THE SCHOOL (IN SQUARE MTR)</td>
              <td class="px-6 py-4 whitespace-no-wrap">8094 Sq.mts.</td>
            </tr>
            <tr className='bg-[#e4d6a733]'>
              <td class="px-6 py-4 whitespace-no-wrap">2</td>
              <td class="px-6 py-4 whitespace-no-wrap">NO. AND SIZE OF THE CLASS ROOMS (IN SQ MTR)</td>
              <td class="px-6 py-4 whitespace-no-wrap">20 Classrooms with 41.4Sq.mts. each</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-no-wrap">3</td>
              <td class="px-6 py-4 whitespace-no-wrap">NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQ MTR</td>
              <td class="px-6 py-4 whitespace-no-wrap">4 Labs with 41.4Sq.mts.each and 1 Computer Science Lab with 83Sq.mts.</td>
            </tr>
            <tr className='bg-[#e4d6a733]'>
              <td class="px-6 py-4 whitespace-no-wrap">4</td>
              <td class="px-6 py-4 whitespace-no-wrap">INTERNET FACILITY (Y/N)</td>
              <td class="px-6 py-4 whitespace-no-wrap">Yes</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-no-wrap">5</td>
              <td class="px-6 py-4 whitespace-no-wrap">NO. OF GIRLS TOILETS</td>
              <td class="px-6 py-4 whitespace-no-wrap">3</td>
            </tr>
            <tr className='bg-[#e4d6a733]'>
              <td class="px-6 py-4 whitespace-no-wrap">6</td>
              <td class="px-6 py-4 whitespace-no-wrap">NO. OF BOYS TOILETS</td>
              <td class="px-6 py-4 whitespace-no-wrap">3</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-no-wrap">7</td>
              <td class="px-6 py-4 whitespace-no-wrap">LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE OF THE SCHOOL</td>
              <td class="px-6 py-4 whitespace-no-wrap"></td>
            </tr>

          </tbody>
        </table>
        </div>
        

      </div>
      <Footer/>

    </div>
  )
}

export default CBSE_Mandatory
