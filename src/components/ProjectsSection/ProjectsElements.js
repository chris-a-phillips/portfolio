import styled from 'styled-components'

export const ProjectsSectionWrapper = styled.div`
    display: grid;
    grid-template-columns: minmax(65%, 75%) 1fr;
    height: 860px;
    width: 100%;
`

export const CarouselWrapper = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lavender;
`

export const CardContainer = styled.div`
    background-color: gray;
    height: 600px;
    width: 600px;
    padding: 10px;
    margin: 10px;
    display: grid;
    place-items: center;
    text-align: center;
`

export const Card = styled.div`
    background-color: white;
    height: 90%;
    width: 90%;
    padding: 10px;
    /* :active; */
`;

export const CardImg = styled.img`
    padding: 20px;
    width: 80%;
    height: 60%;
    background-color: red;
`

export const CardTitle = styled.h1`
    /* padding: 10px; */
    border: solid black 5px;
`

export const CardCaption = styled.h3`
    margin: 5%;
`

export const CardDescription = styled.p`
    margin: 5%;
`

export const CardLink = styled.a`
    margin: 5%;
`

// FOCUSES

export const FocusesWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	background-color: seagreen;
`;
export const FocusBox = styled.div`
	flex: 1 1 300px;
	text-align: center;
	margin: 10%;
`;

export const FocusH1 = styled.h1`
    margin-top: 10px;
    font-size: 2rem;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`

export const FocusImg = styled.img`
	align-self: center;
	width: 100px;
	height: 100px;

	@media screen and (max-width: 768px) {
		height: 75px;
		width: 75px;
	}
`;

export const ProjectImg = styled.img`
    width: 200px;
`