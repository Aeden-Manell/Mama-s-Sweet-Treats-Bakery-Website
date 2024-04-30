import React from 'react';
import "./styles/homestyle.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from '../components/Newsletter';
import MenuList from '../components/MenuList';
import HeroMenu from '../components/HeroMenu';

const Menu = () => {
  return (
    <div>
            <Navbar />
            <HeroMenu />
<MenuList />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Menu;
