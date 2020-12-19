import styled from 'styled-components'
// import img from '../images/background.jpeg'
// background-image: url(${img});
// width: 100%;
// height: 100%;
// -o-object-fit: cover;
// object-fit: cover;

export const PageWrapper = styled.div`
	cursor: none;
`;


export const Cursor = styled.div.attrs(({ top, left }) => ({
	style: {
		top: top,
		left: left,
	},
}))`
	width: 3rem;
	height: 3rem;
	border: 2px solid silver;
	border-radius: 50%;
    position: absolute;
    transform: translate(-50%,-50%);
	pointer-events: none;
	z-index: 5;
	backdrop-filter: hue-rotate(120deg);
`;