import React, { useState } from 'react'
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'
import Hero from './components/HeroSection/Hero'
import Projects from './components/Projects/Projects';


function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
