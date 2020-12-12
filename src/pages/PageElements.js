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
	border: 2px solid silver;
	border-radius: 50%;
    position: absolute;
    transform: translate(-50%,-50%);
	pointer-events: none;
	z-index: 5;
	backdrop-filter: hue-rotate(120deg);
`;

export const FormFooterWrapper = styled.div`
	display: grid;
	grid-template-rows: 1fr minmax(15%, 25%);
	height: 100vh;
`;