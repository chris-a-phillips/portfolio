import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Hero from '../components/HeroSection';
import Projects from '../components/ProjectsSection';
import Resume from '../components/Resume';

const Home = () => {
    return (
		<div>
			<Nav />
			<Hero />
			<About />
			<Projects />
			<Contact />
			<Footer />
			<Resume />
		</div>
	);
};

export default Home;