import React from 'react';
import { AboutBg, AboutContainer, Blurb, Head, HeadShot, Logo, LogoBox, Logos, Picture, Technologies } from './AboutElements';
import headShot from '../../images/headshot.jpeg'
import bootstrap from '../../images/logos/bootstrap-logo.svg'
import django from '../../images/logos/django-logo.png'
import javascript from '../../images/logos/javascript-logo.svg'
import mongoose from '../../images/logos/mongoose-logo.png'
import nodeExpress from '../../images/logos/node-express-logo.jpeg'
import postgresql from '../../images/logos/postgresql-logo.svg'
import python from '../../images/logos/python-logo.svg'
import react from '../../images/logos/react-logo.PNG'
import { ParallaxSeparator } from '../../pages/PageElements';


const About = () => {
    return (
		<AboutBg>
			<AboutContainer id={'about'}>
				<Head>WORKING TO MAKE A DIFFERENCE WITH TECHNOLOGY</Head>
				<Picture>
					<HeadShot src={headShot} />
				</Picture>
				<Blurb>
					I am a full stack software engineer with a passion for
					bringing people together through technology. I build
					applications with the end user experience as my focus. With
					my knowledge of various technologies, I can build
					applications for a wide range of users.
				</Blurb>
				<Technologies>
					<Logos>
						<LogoBox>
							<Logo src={bootstrap} alt={'bootstrap logo'} />
						</LogoBox>
						<LogoBox>
							<Logo src={django} alt={'django logo'} />
						</LogoBox>
						<LogoBox>
							<Logo src={javascript} alt={'javascript logo'} />
						</LogoBox>
						<LogoBox>
							<Logo src={mongoose} alt={'mongoose logo'} />
						</LogoBox>
						<LogoBox>
							<Logo src={nodeExpress} alt={'node express logo'} />
						</LogoBox>
						<LogoBox>
							<Logo src={postgresql} alt={'postgresql logo'} />
						</LogoBox>
						<LogoBox>
							<Logo src={python} alt={'python logo'} />
						</LogoBox>
						<LogoBox>
							<Logo src={react} alt={'react logo'} />
						</LogoBox>
					</Logos>
				</Technologies>
			</AboutContainer>
			<ParallaxSeparator />
		</AboutBg>
	);
};

export default About;