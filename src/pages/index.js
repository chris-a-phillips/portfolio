import { React, useState, useEffect } from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Hero from '../components/HeroSection';
import Projects from '../components/ProjectsSection';
import Resume from '../components/Resume';
import { Cursor, LandingWrapper } from './PageElements'

const Home = () => {
	const [top, setTop] = useState()
	const [left, setLeft] = useState()

	useEffect(() => {
		window.addEventListener('mousemove', cursor)
	}, [])

	function cursor(event) {
		setTop(event.pageY + 'px')
		setLeft(event.pageX + 'px')
	}

	return (
		<div>
			<Cursor top={top} left={left}/>
			<LandingWrapper>
			<Nav />
			<Hero />
			</LandingWrapper>
			<About />
			<Projects />
			<Contact />
			<Footer />
			<Resume />
		</div>
	);
};

export default Home;