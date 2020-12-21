import { React, useState, useEffect } from 'react';
import About from '../components/About';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Hero from '../components/HeroSection';
import Projects from '../components/ProjectsSection';
import Sidebar from '../components/Sidebar'
import Resume from '../components/Resume';
import { Cursor } from './PageElements'
import Contact from '../components/Contact';

const Home = () => {
	const [top, setTop] = useState()
	const [left, setLeft] = useState()
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		window.addEventListener('mousemove', cursor)
	}, [])

	function cursor(event) {
		setTop(event.pageY + 'px')
		setLeft(event.pageX + 'px')
	}

	return (
		<div>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Cursor top={top} left={left} />
			<Nav toggle={toggle} />
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