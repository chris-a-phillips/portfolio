import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import {
	FooterWrap,
	FooterLinksContainer,
	SocialLogo,
	SocialIconLink,
	FooterContainer, 
	SocialIcons
} from './FooterElements';


const Footer = () => {
	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<FooterContainer>
			<FooterWrap>
				<SocialLogo to='/' onClick={toggleHome}>
					Chris Phillips
				</SocialLogo>
				<FooterLinksContainer>
						<SocialIcons>
							<SocialIconLink
								href='//www.facebook.com'
								target='_blank'
								aria-label='Facebook>'>
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink
								href='https://github.com/chris-a-phillips'
								target='_blank'
								aria-label='Github>'>
								<FaGithub />
							</SocialIconLink>
							<SocialIconLink
								href='https://www.linkedin.com/in/chris-a-phillips/'
								target='_blank'
								aria-label='Linkedin>'>
								<FaLinkedin />
							</SocialIconLink>
						</SocialIcons>
				</FooterLinksContainer>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;