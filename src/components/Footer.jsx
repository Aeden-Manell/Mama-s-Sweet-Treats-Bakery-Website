import React from 'react';
import { Link } from "react-router-dom";
import "./styles/Footerstyle.css"

const Footer = () => {
  return (
    <div id='footersection'>
    <footer className="bg-gray-100 font-[sans-serif]" id='footerdiv'>
      <div className="py-8 px-4 sm:px-12">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-auto text-center md:text-left mb-6 md:mb-0">
            <p id='footerlogo' className="text-gray-700 hover:text-gray-900 font-extrabold text-2xl">
            Mama's Sweet Treats
            </p>
          </div>
          <div className="w-full md:w-auto text-center">
            <ul className="flex items-center justify-center flex-wrap gap-y-2 md:justify-end space-x-6">
              <li>
              <Link to="/" className="text-gray-700 hover:text-gray-900 text-base footerlink">
                  Home
                </Link>
              </li>
              <li>
              <Link to="/" className="text-gray-700 hover:text-gray-900 text-base footerlink">
                  About Us
                </Link>
              </li>
              <li>
              <Link to="/" className="text-gray-700 hover:text-gray-900 text-base footerlink">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-700 hover:text-gray-900 text-base footerlink">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-white-200" />
        <p className="text-center text-gray-700 text-base" id='footercopy'>
          Copyright © 2023
            Mama's Sweet Treats. All Rights Reserved.
        </p>
      </div>
    </footer></div>
  );
};

export default Footer;