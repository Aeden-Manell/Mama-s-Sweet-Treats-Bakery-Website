import './App.css';
import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route>
              <Route index element={<Home /> } />
              <Route path="menu" element={<Menu/> } />
              <Route path="aboutus" element={<AboutUs /> } />
              <Route path="contact" element={<Contact /> } />
              <Route path="*" element={<Home /> } />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
