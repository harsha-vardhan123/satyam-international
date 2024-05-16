import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// component imports
import LandingPage from './components/LandingPage/LandingPage';
import AboutUs from './components/AboutUs/AboutUs';
import Mission_vision from './components/AboutUs/Mission_vision/Mission_vision';
import CBSE_Mandatory from './components/CBSE_Mandatory/CBSE_Mandatory';
import FacilitiesNav from './components/FacilitiesNav/FacilitiesNav';
import Admission from './components/Admission/Admission';
import ContactUs from './components/ContactUs/ContactUs';
import Affiliation from './components/Academics/Affiliation';
import Curriculum from './components/Academics/Curriculum';
import Teaching_Methodology from './components/Academics/Teaching_Methodology';
import Theme_Based_Learning from './components/Academics/Theme_Based_Learning';
import NCC_Accrediation from './components/Academics/NCC_Accrediation';
import AdmissionForm from './components/Admission/AdmissionForm';







const App = () => {

  // AOS Initialization scroll animation
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/ourvision" element={<Mission_vision />} />
        <Route path="/affiliation" element={<Affiliation />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/teachingmethodology" element={<Teaching_Methodology />} />
        <Route path="/themebasedlearning" element={<Theme_Based_Learning />} />
        <Route path="/nccaccrediation" element={<NCC_Accrediation />} />
        <Route path="/cbse" element={<CBSE_Mandatory />} />
        <Route path="/facilities" element={<FacilitiesNav />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="admissionform" element={<AdmissionForm />} />

        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
  )
}

export default App
