import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUsPage from './HomePage/AboutUs';
import Home from './HomePage/Home';
import Menu from './HomePage/Menu';
import ContactUs from './HomePage/ContactUs';

function App() {
  return (
    <Router>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/AboutUs" element={<AboutUsPage />} />
            <Route path="/ContactUs" element={<ContactUs />} />
          </Routes>
    </Router>
  );
}

export default App;
