import React from 'react';
import { AboutContainer, Blurb, Head, NotFocuses, Picture, Technologies } from './AboutElements';

const About = () => {
    return (
		<AboutContainer>
            <Head>About</Head>
            <Picture>place image here</Picture>
			<Blurb>
				short blurb: I am a full stack software engineer with a passion
				for bringing people together through technology. I build
				applications with the end user experience as my focus. With my
				knowledge of various technologies, I can build
			</Blurb>
            <NotFocuses>NotFocuses put something else here</NotFocuses>
            <Technologies>
					technologies scroll: html, css, javascript, python,
					postgresql, mongodb, express, react, django, node.js
            </Technologies>
		</AboutContainer>
	);
};

export default About;