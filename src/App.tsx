import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import OurProducts from './components/OurProducts';
import SmartCitiesIoT from './components/SmartCitiesIoT';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero />
      <About />
      <OurProducts />
      <SmartCitiesIoT />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;