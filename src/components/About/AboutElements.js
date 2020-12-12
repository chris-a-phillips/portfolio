import styled from 'styled-components';

export const AboutContainer = styled.div`
    background-color: slategray;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 5px 5px;
    grid-template-areas:
    ". . . . . ."
    "Picture Picture . Blurb Blurb Blurb"
    "Picture Picture . Blurb Blurb Blurb"
    "NotFocuses NotFocuses . . . ."
    "NotFocuses NotFocuses . Technologies Technologies Technologies"
    "NotFocuses NotFocuses . . . .";
}
`;

export const Picture = styled.div`
	grid-area: Picture;
    margin: 10%;
    background-color: peachpuff;
    `;

export const Blurb = styled.div`
	grid-area: Blurb;
    margin: 10%;
    background-color: peachpuff;
    `;
export const NotFocuses = styled.div`
	grid-area: NotFocuses;
    margin: 10%;
    background-color: peachpuff;
    `;
export const Technologies = styled.div`
	grid-area: Technologies;
    margin: 10%;
    background-color: peachpuff;
`;
