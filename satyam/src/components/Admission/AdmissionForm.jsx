import React from 'react';
import Swal from 'sweetalert2';
import slide1 from '../../../images/slide1.png';
import TopNav from '../TopNav/TopNav';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import './AdmissionForm.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';







const AdmissionForm = () => {
  const initialValues = {
    parentName: '',
    relationship: '',
    studentName:"",
    admissionYear: '',
    grade: '',
    previousSchool: '',
    referralSource: [],
    addressLine1: '',
    city: '',
    postal: "",
    email: '',
    phone: ''
  };

  const validationSchema = Yup.object().shape({
    parentName: Yup.string().required('Parent Name is required'),
    relationship: Yup.string().required('Relationship is required'),
    studentName: Yup.string().required('Student Name is required'),
    admissionYear: Yup.string().required('Admission Year is required'),
    grade: Yup.string().required('Grades Inquiring About is required'),
    previousSchool: Yup.string().required('Previous school name is required'),
    referralSource: Yup.array().min(1, 'Please select at least one Referral Source'),
    addressLine1: Yup.string().required('Address Line 1 is required'),
    city: Yup.string().required('City is required'),
    postal: Yup.string().required('Postal Code is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone number is required')
  });

  const admissionYears = ['2024', '2025', '2026', '2027'];
  const relationship = ['Father', 'Mother', 'Guardian', 'Others'];
  const referralSources = ['Internet', 'Friend', 'Advertisement', 'Other'];
  const grade = ['Grade 1 - Grade 6', 'Grade 7 - Grade 10', "Grade 11 - Grade 12"]

  const  handleSubmit = (values, { setSubmitting, resetForm }) => {

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
      text: 'Your Enquiry has been registered.'
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
        <img src={slide1} alt="" className='w-full h-[350px]' />
      </div>

      <div className='m-4  md:m-20 mb-20 md:mb-20'>
        <h1 className='text-zinc-800  text-2xl md:text-3xl font-normal  tracking-wide border-b-8 rounded-br-lg border-[#890000] md:w-[40%] inline-block p-2'>Inquiry Form</h1>

        <p className='desc mt-6 md:mt-8 text-xl'>Fill the complete INQUIRY FORM</p>
        </div>


        <div className='flex flex-col justify-center items-center m-6  md:w-[70%]  md:mx-auto mb-20 bg-[#fcf4d7] p-4 md:p-10'>
          {/* Form Start */}
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={ handleSubmit}>
            {({ isSubmitting }) => (
              <Form className='flex flex-col gap-6  w-full md:w-[70%] mt-4'>

                {/* Inquiring Parent Name */}
                <div className='flex flex-col  gap-4 mb-4'>
                  <label htmlFor="parentName">Inquiring Parent Name<span className='text-red-600'> *</span></label>
                  <Field type="text" id="parentName" name="parentName" placeholder="Enter Your Name" className="p-2 border border-amber-400" />
                  <ErrorMessage name="parentName" component="div" className="text-red-500" />
                </div>

                {/* Relationship to student */}
                <div className='flex flex-col gap-4 mb-4'>
                  <label htmlFor="relationship">Relationship to student<span className='text-red-600'> *</span></label>
                  {relationship.map((source, index) => (
                    <div className='flex items-center space-x-3' key={index}>
                      <Field type="radio" id={`relationship${index}`} name="relationship" value={source} />
                      <label htmlFor={`relationship${index}`}>{source}</label>
                    </div>
                  ))}
                  <ErrorMessage name="relationship" component="div" className="text-red-500" />
                </div>

                  {/* student name */}
                <div className='flex flex-col  gap-4 mb-4'>
                  <label htmlFor="studentName">Student Name<span className='text-red-600'> *</span></label>
                  <Field type="text" id="studentName" name="studentName" placeholder="Enter Your Name" className="p-2 border border-amber-400" />
                  <ErrorMessage name="studentName" component="div" className="text-red-500" />
                </div>

                {/* Admission For which Year? */}
                <div className='flex flex-col gap-2 mb-4'>
                  <label htmlFor="admissionYear">Admission For which Year?<span className='text-red-600'> *</span></label>
                  <Field as="select" id="admissionYear" name="admissionYear" className="p-2 border border-amber-400">
                    <option value="">Select Year</option>
                    {admissionYears.map((year, index) => (
                      <option key={index} value={year}>{year}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="admissionYear" component="div" className="text-red-500" />
                </div>

                {/* What Grades are you Enquiring about? */}
                <div className='flex flex-col gap-2 mb-4'>
                  <label htmlFor="grade">What Grades are you Enquiring about?<span className='text-red-600'> *</span></label>
                  <Field as="select" id="grade" name="grade" className="p-2 border border-amber-400">
                    <option value="">Select Grade</option>
                    {grade.map((year, index) => (
                      <option key={index} value={year}>{year}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="grade" component="div" className="text-red-500" />
                </div>

                {/* Previously studied in which school? */}
                <div className='flex flex-col  gap-2 mb-4'>
                  <label htmlFor="previousSchool">Previously studied in which school?<span className='text-red-600'> *</span></label>
                  <Field type="text" id="previousSchool" name="previousSchool" placeholder="Enter Your School Name" className="p-2 border border-amber-400" />
                  <ErrorMessage name="previousSchool" component="div" className="text-red-500" />
                </div>

                {/* How were you referred to our school */}
                <div className='flex flex-col gap-4 mb-4'>
                  <label htmlFor="referralSource">How were you referred to our school?<span className='text-red-600'> *</span></label>
                  {referralSources.map((source, index) => (
                    <div className='flex items-center space-x-3' key={index}>
                      <Field type="checkbox" id={`referralSource${index}`} name="referralSource" value={source} />
                      <label htmlFor={`referralSource${index}`}>{source}</label>
                    </div>
                  ))}
                  <ErrorMessage name="referralSource" component="div" className="text-red-500" />
                </div>

                {/* Address*/}
                <div className='flex flex-col  gap-6 mb-4'>
                  <label htmlFor="addressLine1">Address<span className='text-red-600'> *</span></label>
                  <div className='flex flex-col gap-1'>
                    <Field type="text" id="addressLine1" name="addressLine1" placeholder="Street Address" className="p-2 border border-amber-400" />
                    <ErrorMessage name="addressLine1" component="div" className="text-red-500" />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <Field type="text" id="city" name="city" placeholder="City" className="p-2 border border-amber-400" />
                    <ErrorMessage name="city" component="div" className="text-red-500" />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <Field type="text" id="postal" name="postal" placeholder="Postal / Zip Code" className="p-2 border border-amber-400" />
                    <ErrorMessage name="postal" component="div" className="text-red-500" />
                  </div>

                </div>

                {/* Email */}
                <div className='flex flex-col  gap-2 mb-4'>
                  <label htmlFor="email">Email<span className='text-red-600'> *</span></label>
                  <Field type="text" id="email" name="email" placeholder="Enter Your Email" className="p-2 border border-amber-400" />
                  <ErrorMessage name="email" component="div" className="text-red-500" />
                </div>

                {/* Phone */}
                <div className='flex flex-col  gap-2 mb-4'>
                  <label htmlFor="phone">Phone<span className='text-red-600'> *</span></label>
                  <Field type="text" id="honee" name="phone" placeholder="Phone Number" className="p-2 border border-amber-400" />
                  <ErrorMessage name="phone" component="div" className="text-red-500" />
                </div>

                {/* button */}
                <div className='flex flex-col md:flex-row'>
                  <button type="submit" disabled={isSubmitting} className='bg-orange-400 rounded-3xl shadow p-2 md:px-8 text-white text-lg md:mx-auto'>{isSubmitting ? 'Submitting...' : 'Submit'}</button>
                </div>

              </Form>
            )}
          </Formik>


          {/* Form End */}


        </div>




       <Footer/>

    </div>





  );
}

export default AdmissionForm;
