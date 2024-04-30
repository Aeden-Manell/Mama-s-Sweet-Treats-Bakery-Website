import React from 'react';
import HeroImg from "../assets/heroimg.png"
import { Link } from "react-router-dom";
import "./styles/Herostyle.css"

const Hero = () => {
  return (
    <div className='heroBody'>
    <div className="grid md:grid-cols-2 items-center md:gap-15 gap-10 font-sans text-[#333] max-w-6xl max-md:max-w-md mx-auto">
      
      <div className="max-md:order-1 max-md:text-center" >
        <h2 className="md:text-4xl text-3xl md:leading-10 font-extrabold text-[#333] mb-4" id='heading'>Savoring <br></br><span id='heroheader'>Moments of</span><br></br> Sweet Delight</h2>
        <p className="mt-4 text-base text-[#666] leading-relaxed" id='herop' >We're a family-owned bakery, baking fresh, delicious treats from scratch using time-honored recipes passed down through generations.</p>
        <div className="mt-8 flex max-sm:flex-col sm:space-x-4 max-sm:space-y-6">
          <Link to="/ordernow" className="px-6 py-3 text-base font-semibold text-white bg-[#832a1e] rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#f032e6] focus:outline-none focus:ring-opacity-50" id='herbtn'>Order Now</Link>
          <Link to="/contact" className="px-6 py-3 text-base font-semibold text-[#832a1e] border border-[#832a1e] rounded-full hover:text-white hover:bg-[#832a1e] transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#f032e6] focus:outline-none focus:ring-opacity-50" id='herbtn'>Contact</Link>
        </div>
      </div>

      <div className="md:h-[450px]" id='heropng'>
        <img src={HeroImg} className="w-full h-full object-cover rounded-lg shadow-xl" alt="Dining Experience" />
      </div>
    
    </div></div>
  );
};

export default Hero;