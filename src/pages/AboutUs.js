import React from 'react';
import "./styles/homestyle.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from '../components/Newsletter';
import ContentAbout from '../components/ContentAbout';
import ImageGrid from '../components/ImageGrid';

const AboutUs = () => {
  return (
    <div>
      <Navbar />
<ContentAbout />
<ImageGrid />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default AboutUs;
