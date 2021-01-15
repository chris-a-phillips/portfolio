import { React, useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavBtn,
	NavBtnLink,
	Favicon,
} from './NavElements';
// import Pdf from '../../documents/Chris Phillips Resume.pdf'
import favicon from '../../images/media/Solar System.png'

const Navbar = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	const toggleHome = () => {
		scroll.scrollToTop();
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, []);

	return (
		<>
			<IconContext.Provider value={{ color: '#fff' }}>
				<Nav scrollNav={scrollNav}>
					<NavbarContainer>
						<NavLogo to='/' onClick={toggleHome}>
						<Favicon src={favicon}/>
							Chris Phillips
						</NavLogo>
						<MobileIcon onClick={toggle}>
							<FaBars />
						</MobileIcon>
						<NavMenu>
							<NavItem>
								<NavLinks
									to='about'
									smooth={true}
									duration={500}
									spy={true}
									exact='true'
									offset={-80}>
									About
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks
									to='projects'
									smooth={true}
									duration={500}
									spy={true}
									exact='true'
									offset={-80}>
									Projects
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks
									to='contact'
									smooth={true}
									duration={500}
									spy={true}
									exact='true'
									offset={-80}>
									Contact Me
								</NavLinks>
							</NavItem>
						</NavMenu>
						<NavBtn>
							<NavBtnLink 
							// href={Pdf} target='_blank'
							>
								Resume
							</NavBtnLink>
						</NavBtn>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	);
};

export default Navbar;
