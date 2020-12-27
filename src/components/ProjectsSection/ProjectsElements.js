import styled from 'styled-components';
import { TiArrowLeftOutline, TiArrowRightOutline } from 'react-icons/ti';
import bg from '../../images/backgrounds/pexels-photo-3612931.jpg';
import pattern from '../../images/backgrounds/pattern.svg';
import vortex from '../../images/backgrounds/vortex.svg';
import { VscGithub } from 'react-icons/vsc'
import { GiWireframeGlobe } from 'react-icons/gi';


export const ProjectsSectionWrapper = styled.div`
	display: grid;
	grid-template-columns: minmax(65%, 75%) 1fr;
	height: 860px;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.75);

	@media screen and (max-width: 768px) {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr;
		gap: 0px 0px;
		grid-template-areas:
			'Carousel Carousel Carousel Carousel Carousel Carousel'
			'Carousel Carousel Carousel Carousel Carousel Carousel'
			'Carousel Carousel Carousel Carousel Carousel Carousel'
			'Focuses Focuses Focuses Focuses Focuses Focuses';
	}
`;

export const CarouselWrapper = styled.div`
	position: relative;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 768px) {
		grid-area: Carousel;
	}
`;

export const CardContainer = styled.div`
	border-radius: 25px;
	height: 600px;
	width: 600px;
	padding: 10px;
	margin: 10px;
	display: grid;
	place-items: center;
	text-align: center;
	background-image: url(${pattern});
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	@media screen and (max-width: 480px) {
		margin: 0;
		padding: 0;
		height: 70%;
	}
`;

export const Card = styled.div`
	border-radius: 10px;
	height: 100%;
	width: 100%;
	padding: 10px;
	background-image: url(${vortex});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

export const CardImg = styled.img`
	padding: 20px;
	width: 100%;
	height: 60%;
	aspect-ratio: 16 / 9;

	@media screen and (max-width: 480px) {
		width: 100%;
		height: 40%;
	}
`;

export const CardTitle = styled.h1`
	border: solid white 5px;
	border-radius: 5px;
	color: #fff;
	@media screen and (max-width: 768px) {
		font-size: 2rem;
	}
`;

export const CardCaption = styled.h3`
	margin-bottom: -20px;
	font-weight: 100;
	font-size: 0.75rem;
	color: #1bcef7;
	filter: contrast(400%);
`;

export const CardDescription = styled.p`
	margin: 5%;
	color: #1bcef7;
	filter: contrast(400%);
`;

export const LinksWrapper = styled.div``

export const CardLink = styled.a`
	border: solid white 5px;
	border-radius: 5px;
	color: white;
	background-color: black;
	padding: 5px;
	text-decoration: none;
	cursor: none;

	:hover {
		color: #1aeddc;
		border: groove #1aeddc 5px;
	}
`;

// FOCUSES

export const FocusesWrapper = styled.div`
	background-image: url(${pattern});
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	@media screen and (max-width: 768px) {
		grid-area: Focuses;
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
		padding-top: 5%;
	}

	@media screen and (max-width: 480px) {
		padding-top: 17%;
	}
`;

export const FocusBox = styled.div`
	flex: 1 1 300px;
	text-align: center;
	margin: 5%;
	color: #1aeddc;

	@media screen and (max-width: 768px) {
		margin: 10%;
	}
`;

export const FocusH1 = styled.h1`
	margin-top: 10px;
	font-size: 2rem;

	@media screen and (max-width: 768px) {
		font-size: 1rem;
	}
	@media screen and (max-width: 480px) {
		font-size: 0.75rem;
	}
`;

export const FocusImg = styled.img`
	align-self: center;
	width: 100px;
	height: 100px;

	@media screen and (max-width: 768px) {
		height: 45px;
		width: 45px;
	}
`;

export const ProjectImg = styled.img`
	width: 200px;
`;

export const ArrowLeft = styled(TiArrowLeftOutline)`
	margin: 0 10px;
	font-size: 100px;
	fill: #1aeddc;

	:hover {
		fill: orange;
	}
`;

export const ArrowRight = styled(TiArrowRightOutline)`
	margin: 0 10px;
	font-size: 100px;
	fill: #1aeddc;

	:hover {
		fill: orange;
	}
`;

export const GithubIcon = styled(VscGithub)`
	margin: 0 10px;
	font-size: 40px;
	fill: #1aeddc;

	:hover {
		fill: #ff0000;
	}
`;

export const WebsiteIcon = styled(GiWireframeGlobe)`
	margin: 0 10px;
	font-size: 40px;
	fill: #1aeddc;

	:hover {
		fill: #ff0000;
	}
`;

export const ProjectsBg = styled.div`
	background-image: url(${bg});
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

export const FocusesBg = styled.div`
	background-image: url(${pattern});
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

export const SocialIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 50%;
	margin: auto;
`;

export const SocialIconLink = styled.a`
	color: #fff;
	font-size: 4rem;
	cursor: none;
`;
