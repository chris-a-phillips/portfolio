import React from 'react';
import Video from '../../videos/video.mp4'
import { HeroBg, HeroContainer, HeroContent, HeroH1, HeroH2, HeroP, VideoBg } from './HeroElements';

const Hero = () => {
    return (
		<HeroContainer id='home'>
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type='video/mp4' />
			</HeroBg>
			<HeroContent>
				<HeroH1>Chris Phillips</HeroH1>
				<HeroH2>Full Stack Software Engineer</HeroH2>
				<HeroP>
					I am a software engineer based in the San Francisco Bay Area, specializing in producing dynamic and  powerful full stack applications.
				</HeroP>
			</HeroContent>
		</HeroContainer>
	);
};

export default Hero;