import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Detailfilm from './components/Detailfilm';
import About from './components/About';
import Biodata from './components/Biodata';
import Service from './components/Service';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from "./components/Hero";
import Gallery from "./components/Gallery"; // Pastikan ini diimpor dengan benar
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Hero />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movie/:id" element={<Detailfilm />} />
          <Route path="/about" element={<About />} />
          <Route path="/biodata" element={<Biodata />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} /> {/* Pastikan ini dieja dengan benar */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
