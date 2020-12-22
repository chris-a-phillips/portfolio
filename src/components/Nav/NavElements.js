import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
	background: ${({ scrollNav }) =>
		scrollNav ? 'rgba(0,0,0, 0.6)' : 'transparent'};
	height: 10vh;
	margin-top: -10vh;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 3;

	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	max-width: 1100px;
	color: #1bcef7;
`;

export const NavLogo = styled(LinkR)`
	color: #1bcef7;
	justify-self: flex-start;
	cursor: none;
	font-size: 1.5 rem;
	display: flex;
	align-items: center;
	margin-left: 24px;
	font-weight: bold;
	text-decoration: none;

	&:hover {
		transition: 0.5s ease-in-out;
		transform: scale(1.5);
	}
`;

export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: none;
		width: 25px;
		z-index: 2;
		fill: #1bcef7;

		&:hover {
			filter: drop-shadow(16px 16px 20px red) invert(75%);
			transition: 0.3s linear;
		}
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: 22px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavItem = styled.li`
	height: 80px;
`;

export const NavLinks = styled(LinkS)`
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: none;

	&:hover {
		transition: all 0.2s ease-in-out;
		transform: scale(1.5);
	}

	&.active {
		// color of navbar button highlight
		border-bottom: 3px solid #1aeddc;
	}
	color: #1aeddc;
`;

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavBtnLink = styled.a`
	border-radius: 50px;
	background: #1aeddc;
	white-space: nowrap;
	padding: 10px 22px;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: none;
	transition: all 0.2ease-in-out;
	text-decoration: none;

	&:hover {
		transition: all 0.2s ease-in-out;
		color: #010606;
		transform: scale(1.5);
	}
`;