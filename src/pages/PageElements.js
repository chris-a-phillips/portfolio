import styled from 'styled-components'

export const PageWrapper = styled.div`
	cursor: none;
`

export const Cursor = styled.div.attrs(({ top, left }) => ({
	style: {
		top: top,
		left: left,
	},
}))`
	width: 3rem;
	height: 3rem;
	border: 2px solid black;
	border-radius: 50%;
    position: absolute;
    transform: translate(-50%,-50%);
	pointer-events: none;
	/* might be useful for cool image stuff */
	/* z-index: -1; */
	backdrop-filter: hue-rotate(120deg)
`;
