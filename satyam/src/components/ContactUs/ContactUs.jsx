import React from 'react';
import hostel from '../../../images/hostel.png';
import TopNav from '../TopNav/TopNav';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import './ContactUs.css';
import location from '../../../images/location.svg';
import clock from '../../../images/clock.svg';
import phone from '../../../images/phone.svg';
import businesshour from '../../../images/businesshour.svg';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';


const ContactUs = () => {
  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required')
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {

    // Log form data to the console
  console.log('Form Data:', values);

    // Simulate API call or asynchronous operation
    setTimeout(() => {
      // Reset form fields
      resetForm();
      // Show success message
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Your message has been sent successfully.'
      });
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div>
      <TopNav />
      <NavBar />
      {/* Main Banner */}
      <div className='mt-4 md:mt-0'>
        <img src={hostel} alt="" className='w-full h-[350px]' />
      </div>

      <div className='m-4 md:m-20 mb-20 md:mb-20'>
        <h1 className='text-zinc-800  text-2xl md:text-3xl font-normal  tracking-wide border-b-8 rounded-br-lg border-[#890000] md:w-[40%] inline-block p-2'>Get In Touch</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>

          {/* grid-1 */}
          <div data-aos="slide-right" className='grid-1 mt-10 '>
            <div className='flex justify-center md:justify-end'>
              <div className='relative flex flex-col items-center justify-center gap-4 h-[300px] w-[320px] shadow shadow-2xl p-6 group'>
                <div className='contacticons'>
                  <div className='contactinside'>
                    <div className='absolute top-5 left-[30px]'>
                      <img src={location} alt="" className='w-[30px]' />
                    </div>

                  </div>
                </div>
                <p className='text-2xl font-semibold z-20'>Location</p>
                <p className='text-center z-20'>After 2nd Canal, Kappagal village Road, Ballari, 538103</p>

                <div className='hoverslide'>
                  <div className='hoverslide2'></div>
                </div>



              </div>

            </div>



          </div>

          {/* grid-2 */}
          <div data-aos="slide-left" className='grid-2 mt-10 '>
          <div className='flex justify-center md:justify-start'>
            <div className='relative flex flex-col items-center justify-center gap-4 h-[300px] w-[320px] shadow shadow-2xl p-6 group'>
              <div className='contacticons'>
                <div className='contactinside'>
                  <div className='absolute top-7 left-[30px]'>
                    <img src={phone} alt="" className='w-[30px]' />
                  </div>

                </div>
              </div>
              <p className='text-2xl font-semibold z-20'>Phone & Email</p>
              <p className='text-center z-20'>Phone: 90366 41085 office@satyaminternationalschool.in</p>

              <div className='hoverslide'>
                <div className='hoverslide2'></div>
              </div>


            </div>
            </div>


          </div>

          {/* grid-3 */}
          <div data-aos="slide-right" className='grid-3 mt-10 '>
            <div className='flex justify-center md:justify-end'>
            <div className='relative flex flex-col items-center justify-center gap-4 h-[300px] w-[320px] shadow shadow-2xl p-6 group'>
              <div className='contacticons'>
                <div className='contactinside'>
                  <div className='absolute top-7 left-[27px]'>
                    <img src={businesshour} alt="" className='w-[35px]' />
                  </div>

                </div>
              </div>
              <p className='text-2xl font-semibold z-20'>Business hours</p>
              <p className='text-center z-20'>Monday-Saturday(9.00 am-4.00pm) Sunday closed</p>

              <div className='hoverslide'>
                <div className='hoverslide2'></div>
              </div>



            </div>
            </div>


          </div>

          {/* grid-4 */}
          <div data-aos="slide-left" className='grid-1 mt-10 '>
          <div className='flex justify-center md:justify-start'>
            <div className='relative flex flex-col items-center justify-center gap-4 h-[300px] w-[320px] shadow shadow-2xl p-6 group'>
              <div className='contacticons'>
                <div className='contactinside'>
                  <div className='absolute top-6 left-[26px]'>
                    <img src={clock} alt="" className='w-[39px]' />
                  </div>

                </div>
              </div>
              <p className='text-2xl font-semibold z-20'>Hours of Operation</p>
              <p className='text-center z-20'>Morning 8:00 am to 12:00 pm Afternoon 1.00pm to 5.00pm</p>

              <div className='hoverslide'>
                <div className='hoverslide2'></div>
              </div>



            </div>

          </div>
          </div>

        </div>
        </div>

        {/* contactUs form */}
        <div className='flex flex-col justify-center items-center gap-4 w-full mt-6 p-10 bg-[#fcf4d7]'>
          <div className='top_header flex flex-col justify-center items-center'>
        <h1 className='text-zinc-800  text-2xl md:text-4xl font-normal  tracking-wide border-b-8 rounded-br-lg border-[#890000] md:w-[100%] text-center inline-block capitalize p-2' >WELCOMING SCHOOL THAT 
        <h1>CHILDREN LOVE</h1>
        </h1>
        <p className='capitalize text-amber-400 text-lg font-normal leading-10 mt-6'>FEEL FREE TO GET IN TOUCH</p>

          </div>

          <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <div className='flex flex-col mx-auto w-full md:w-[40%]'>
        <Form>
          <div className="mb-4">
            <label htmlFor="name">Your Name</label>
            <Field type="text" name="name" className="block w-full mt-1 p-2 bg-white border border-amber-400 rounded" />
            <ErrorMessage name="name" component="div" className="text-red-500 mt-1" />
          </div>
          <div className="mb-4">
            <label htmlFor="email">Your Email</label>
            <Field type="email" name="email" className="block w-full mt-1 p-2 border border-amber-400 rounded" />
            <ErrorMessage name="email" component="div" className="text-red-500 mt-1" />
          </div>
          <div className="mb-4">
            <label htmlFor="subject">Subject</label>
            <Field type="text" name="subject" className="block w-full mt-1 p-2 border border-amber-400 rounded" />
            <ErrorMessage name="subject" component="div" className="text-red-500 mt-1" />
          </div>
          <div className="mb-4">
            <label htmlFor="message">Message</label>
            <Field as="textarea" name="message" rows="4" className="block w-full mt-1 p-2 border border-amber-400 rounded" />
            <ErrorMessage name="message" component="div" className="text-red-500 mt-1" />
          </div>
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-[#FAA327] hover:bg-[#f08e02] text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </Form>
        </div>
      )}
    </Formik>


        </div>


      <Footer/>
    </div>
  )
}

export default ContactUs



