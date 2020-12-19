import styled from 'styled-components'


export const ProjectsSectionWrapper = styled.div`
    display: grid;
    grid-template-columns: minmax(65%, 75%) 1fr;
    height: 860px;
    width: 100%;
`

export const FocusesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: seagreen;
`
export const FocusBox = styled.div`
    flex: 1 1 300px;
    text-align: center;
    margin: 10%;
`

export const CarouselWrapper = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lavender;
`

export const Card = styled.div`

    :active;
`;

export const CardImg = styled.img`
    width: 80%;
    height: 80%;
    border-radius: 10%;
`

export const CardInfo = styled.div`

`

export const CardTitle = styled.h1`

`

export const CardDescription = styled.h3`

`

export const LinkWrapper = styled.div`

`

export const CardLink = styled.button`

`

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