import React from 'react';
import "./styles/homestyle.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from '../components/Newsletter';

const AboutUs = () => {
  return (
    <div>
      <Navbar />

      <Newsletter />
      <Footer />
    </div>
  )
}

export default AboutUs;
