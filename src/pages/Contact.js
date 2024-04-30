import React from 'react';
import "./styles/homestyle.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from '../components/Newsletter';
import ContactForm from '../components/ContactForm';
import HeroContact from '../components/HeroContact';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroContact />
      <ContactForm />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Contact;
