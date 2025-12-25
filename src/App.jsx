import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechTrust from './components/TechTrust';
import CoreValueProp from './components/CoreValueProp';
import KeyFeatures from './components/KeyFeatures';
import AboutUs from './components/AboutUs';
import OurProcess from './components/OurProcess';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-magic-dark text-white selection:bg-magic-purple selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TechTrust />
        <CoreValueProp />
        <KeyFeatures />
        <AboutUs />
        <OurProcess />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
