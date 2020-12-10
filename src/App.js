import React, { useState } from 'react'
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer'
import Nav from './components/Nav'
import Hero from './components/HeroSection'
import Projects from './components/Projects';
import Resume from './components/Resume';


function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <Resume />
    </div>
  );
}

export default App;
