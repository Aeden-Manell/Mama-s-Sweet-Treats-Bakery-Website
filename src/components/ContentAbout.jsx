import React from 'react';
import "./styles/ContentAbout.css"

const ContentAbout = () => {
  return (
    <div id="headerDiv">
      <section id="headerDiv features" className="relative block px-6 py-10 md:py-20 md:px-10 border-t ">
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
            Why choose us
          </span>
          <h2 id='abouth1' className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
          Mama's Sweet Treats:<br></br> Where Tradition Meets Delicious
          </h2>
          <p id='aboutp' className="my-5 w-full bg-transparent text-center leading-relaxed tracking-wide ">
          At Mama's Sweet Treats, we're more than just a bakery; we're a family. For generations, our family 
          has been gathering around the kitchen, whipping up fresh, delicious treats from scratch using time-honored 
          recipes passed down through the years. We believe in the power of simple, wholesome ingredients and the love 
          that goes into every bite.
          </p>
        </div>
        
</section>
    </div>
  );
};

export default ContentAbout;