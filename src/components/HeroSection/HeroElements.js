// import { logDOM } from '@testing-library/react';
import styled from 'styled-components'

export const HeroContainer = styled.div`
	display: flex;
	justify-content: left;
	align-items: center;
	padding: 0 30px;
	height: 800px;
	position: relative;
	z-index: 1;
`;

export const HeroBg = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

export const VideoBg = styled.video`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
    background: #232a34;
`;

export const HeroContent = styled.div`
	z-index: 2;
	max-width: 1200px;
	position: absolute;
	padding: 8px 24px;
	display: flex;
	flex-direction: column;
	align-items: left;
`;

export const HeroH1 = styled.h1`
	margin-top: 35%;
	color: #82c0cc;
	font-size: 4rem;
	text-align: left;
	/* border-radius: 100%; */
	background-color: rgba(0,0,0, 0.5);
	/* filter: contrast(400%); */
	/* filter: drop-shadow(16px 16px 20px red) invert(75%); */

	@media screen and (max-width: 768px) {
		font-size: 3.5rem;
	}

	@media screen and (max-width: 480px) {
		font-size: 3rem;
	}
`;

export const HeroH2 = styled.h2`
	color: #cc92c2;
	font-size: 3rem;
	text-align: left;
	/* filter: contrast(400%); */

	@media screen and (max-width: 768px) {
		font-size: 2.5rem;
	}

	@media screen and (max-width: 480px) {
		font-size: 2rem;
	}
`;

export const HeroP = styled.p`
	margin-top: 3rem;
	color: #2a9d8f;
	font-size: 2rem;
	text-align: left;
	max-width: 600px;
	background-color: rgba(0, 0, 0, 0.6);
	/* filter: contrast(400%); */

	@media screen and (max-width: 768px) {
		font-size: 1.5rem;
	}

	@media screen and (max-width: 480px) {
		font-size: 1rem;
	}
`;