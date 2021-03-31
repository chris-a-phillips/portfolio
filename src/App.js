import { React, useState, useEffect } from 'react';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Hero from './components/HeroSection/HeroSection';
import Projects from './components/ProjectsSection';
import Sidebar from './components/Sidebar/Sidebar';
import { Cursor, PageWrapper } from './SCApp';
import Contact from './components/Contact/Contact';

const Home = () => {
	const [top, setTop] = useState();
	const [left, setLeft] = useState();
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		window.addEventListener('mousemove', cursor);
	}, []);

	function cursor(event) {
		setTop(event.pageY + 'px');
		setLeft(event.pageX + 'px');
	}

	return (
		<PageWrapper>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Cursor top={top} left={left} />
			<Nav toggle={toggle} />
			<Hero />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</PageWrapper>
	);
};

export default Home;
