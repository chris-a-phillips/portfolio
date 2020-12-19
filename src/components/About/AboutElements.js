import styled from 'styled-components';


export const AboutContainer = styled.div`
    background-color: #1d3557;
    height: 860px;
    width: 100%;
    display: grid;
    text-align: center;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 5px 5px;
    grid-template-areas:
    "Head Head Head Blurb Blurb Blurb"
    "Picture Picture . Blurb Blurb Blurb"
    "Picture Picture . Blurb Blurb Blurb"
    "Technologies Technologies Technologies Technologies Technologies Technologies"
    "Technologies Technologies Technologies Technologies Technologies Technologies"
    "Technologies Technologies Technologies Technologies Technologies Technologies";
    font-size: 2rem;

        @media screen and (max-width: 768px) {
		font-size: 1.5rem;
	}

	@media screen and (max-width: 480px) {
		font-size: 1rem;
	}
}
`;

export const Head = styled.div`
	grid-area: Head;
	margin: 10%;
	background-color: #f1faee;
	font-size: 2.5rem;

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
    background-color: #a8dadc;
    `;

export const Blurb = styled.div`
	grid-area: Blurb;
    margin: 10%;
    background-color: #457b9d;
    `;

export const HeadShot = styled.img`
	width: 70%;
`;

export const Logo = styled.img`
    width: 95px;
    margin: 20px;
    transition: all 0.5s ease;

    :hover {
        transform: scale(1.5);
    }
`

export const Technologies = styled.div`
	grid-area: Technologies;
	margin: auto 20px;
	width: 100%;
    height: 90%;
	margin: 50px auto;
    border-radius: 25px;
`;


export const LogoBox = styled.div`
`;