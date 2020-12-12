import styled from 'styled-components'


export const ProjectsSectionWrapper = styled.div`
    display: grid;
    grid-template-columns: minmax(25%, 35%) 1fr;
    height: 100vh;
`

export const FocusesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: seagreen;
`
export const Focus = styled.div`
    flex: 1 1 300px;
    border: 2px solid black;
    text-align: center;
    margin: 10%;
    background-color: lavender;
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