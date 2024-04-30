import "./styles/HeroContact.css";
import React from 'react';

const HeroContact = () => {
  return (
    <div className='heroBody'>
    <div className="grid md:grid-cols-2 items-center md:gap-15 gap-10 font-sans text-[#333] max-w-6xl max-md:max-w-md mx-auto">
      
      <div className="max-md:order-1 max-md:text-center" >
        <h2 className="md:text-4xl text-3xl md:leading-10 font-extrabold text-[#333] mb-4" id='heading'>Get <span id='heroheader'>In Touch</span><br></br> With Us</h2>
        <p className="mt-4 text-base text-[#666] leading-relaxed" id='herop' >For more information on Mama's Sweet Treats. Please give our Head Office a call on any of the below number or drop us a mail.</p>

      </div>

      <div className="md:h-[450px]" id='heropng'>
        <img src="https://images.pexels.com/photos/1995010/pexels-photo-1995010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-full object-cover rounded-lg shadow-xl" alt="Dining Experience" />
      </div>
    
    </div></div>
  );
};

export default HeroContact;