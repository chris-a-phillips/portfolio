import styled from 'styled-components';
import bg from '../../images/backgrounds/pexels-photo-3612930.jpg';

export const AboutContainer = styled.div`
	background-color: rgba(0,0,0,0.75);
    height: 860px;
    width: 100%;
    display: grid;
    color: #1aeddc;
    text-align: center;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 5px 5px;
    grid-template-areas:
    "Head Head Head Blurb Blurb Blurb"
    "Picture Picture . Blurb Blurb Blurb"
    "Picture Picture . Blurb Blurb Blurb"
    ". . . . . ."
    "Technologies Technologies Technologies Technologies Technologies Technologies"
    "Technologies Technologies Technologies Technologies Technologies Technologies";
    font-size: 2rem;

	@media screen and (max-width: 768px) {
	font-size: 1.5rem;
	};

	@media screen and (max-width: 480px) {
		font-size: 1rem;
	};
`;

export const AboutBg = styled.div`
	background-image: url(${bg});
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

export const Head = styled.div`
	grid-area: Head;
	margin: 10%;
	font-size: 2.5rem;
	color: #fff;

	@media screen and (max-width: 768px) {
		font-size: 2rem;
	}

	@media screen and (max-width: 480px) {
		font-size: 1.5rem;
	}
`;

export const Picture = styled.div`
	grid-area: Picture;
	margin: 10%;
	height: 80%;
	width: 80%;
	display: grid;
	place-items: center;
	border-radius: 10px;
`;

export const Blurb = styled.div`
	grid-area: Blurb;
	margin: 10%;
`;

export const HeadShot = styled.img`
	width: 90%;
	border-radius: 10px;
`;

export const Technologies = styled.div`
	grid-area: Technologies;
	width: 100%;
	height: 90%;
	padding: 10px;
	margin: 20px auto;
`;

export const Logo = styled.img`
	width: 75px;
	margin: auto 5px;
	transition: all 0.5s ease;

	:hover {
		transform: scale(1.5);
	}

	@media screen and (max-width: 768px) {
		width: 50px;
	}

	@media screen and (max-width: 480px) {
		width: 25px;
	}
`;

export const Logos = styled.div`
	position: relative;
	display: block;
	margin: auto 10%;
	width: 80%;
	padding-top: 100%;
`;

export const LogoBox = styled.div`
	top: 0;
	border-radius: 20px;
	position: absolute;

	&:nth-of-type(1) {
		animation: slide 17s -12s linear infinite;
	}
    &:nth-of-type(2)  { animation: slide 17s -10s linear infinite; }
    &:nth-of-type(3)  { animation: slide 17s -8s linear infinite; }
    &:nth-of-type(4)  { animation: slide 17s -6s linear infinite; }
    &:nth-of-type(5)  { animation: slide 17s -4s linear infinite; }
    &:nth-of-type(6)  { animation: slide 17s -2s linear infinite; }
    &:nth-of-type(7)  { animation: slide 17s 0s linear infinite; }
    &:nth-of-type(8)  { animation: slide 17s 2s linear infinite; }

    @keyframes slide {
        0%   { left:-2%; }
        100% { left:100%; }
	}


`;

	// @media screen and (max-width: 768px) {

	// }

	// @media screen and (max-width: 480px) {

	// }