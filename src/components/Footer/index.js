import React from 'react';
import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import {
	FooterWrap,
	FooterLinksContainer,
	SocialLogo,
	SocialIconLink,
	FooterContainer, 
	SocialIcons,
} from './FooterElements';


const Footer = () => {
	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<FooterContainer id='contact'>
			<FooterWrap>
				<SocialLogo to='/' onClick={toggleHome}>
					Chris Phillips
				</SocialLogo>
				<FooterLinksContainer>
					<SocialIcons>
						<SocialIconLink
							href='https://www.linkedin.com/in/chris-a-phillips/'
							target='_blank'
							aria-label='Linkedin>'>
							<FaLinkedin />
						</SocialIconLink>
						<SocialIconLink
							href='https://github.com/chris-a-phillips'
							target='_blank'
							aria-label='Github>'>
							<FaGithub />
						</SocialIconLink>
						<SocialIconLink
							href='https://discord.com/channels/785637900455772180/785653630380015616'
							target='_blank'
							aria-label='Discord>'>
							<FaDiscord />
						</SocialIconLink>
					</SocialIcons>
				</FooterLinksContainer>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
