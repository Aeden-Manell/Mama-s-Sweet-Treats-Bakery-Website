import React from 'react';
import "./styles/homestyle.css";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from '../components/slider';
import Bestsellers from '../components/BestSellers';
import Newsletter from '../components/Newsletter';
import AboutCTA from '../components/AboutCTA';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Slider />
      <AboutCTA />
      <Bestsellers />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home;
