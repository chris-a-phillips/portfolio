import styled from 'styled-components';


export const AboutContainer = styled.div`
    background-color: #1d3557;
    height: 100vh;
    display: grid;
    text-align: center;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 5px 5px;
    grid-template-areas:
    ". Head Head Head Head ."
    "Picture Picture . Blurb Blurb Blurb"
    "Picture Picture . Blurb Blurb Blurb"
    "NotFocuses NotFocuses . . . ."
    "NotFocuses NotFocuses . Technologies Technologies Technologies"
    "NotFocuses NotFocuses . . . .";
}
`;

export const Head = styled.div`
	grid-area: Head;
    margin: 10%;
    background-color: #f1faee;
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
export const NotFocuses = styled.div`
	grid-area: NotFocuses;
    margin: 10%;
    background-color: #e63946;
    `;

export const Technologies = styled.div`
	grid-area: Technologies;
	margin: 10%;
	background-color: peachpuff;
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`;

export const HeadShot = styled.img`
    width: 125%;
`

export const Logo = styled.img`
    width: 95px;
`