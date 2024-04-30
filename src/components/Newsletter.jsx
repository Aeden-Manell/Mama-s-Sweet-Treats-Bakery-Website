import React from 'react';
import "./styles/Newsletter.css";

const Newsletter = () => {
  return (
    <div>
<div class="bg-purple-50 py-20 px-4 text-[#fff] font-[sans-serif]" id='mainNews'>
      <div class="max-w-4xl w-full mx-auto text-center">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-6 leading-[45px]" id='HeadingNews'>Subscribe Our Newsletter</h2>
        <p class="text-base" id='SubHeadingNews'>Stay updated with our latest news and exclusive offers. <br></br> Join our community today!</p>
        <div class="mt-10 bg-white flex items-center sm:p-4 p-2 max-w-xl mx-auto rounded-2xl border border-gray-300" id='SubInput'>
          <input type="email" placeholder="Enter your email" class="w-full bg-transparent py-4 px-2 text-[#333] text-base border-none outline-none" />
          <button class="bg-gray-700 hover:bg-gray-800 text-white text-base font-semibold py-4 px-4 sm:px-8 rounded-2xl focus:outline-none" id='BtnNews'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Newsletter;
