import React from 'react';
import "./styles/homestyle.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from '../components/Newsletter';
import ContentAbout from '../components/ContentAbout';
import ImageGrid from '../components/ImageGrid';
import AboutSection from '../components/AboutSection';

const AboutUs = () => {
  return (
    <div>
      <Navbar />
<ContentAbout />
<ImageGrid />
<AboutSection />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default AboutUs;
