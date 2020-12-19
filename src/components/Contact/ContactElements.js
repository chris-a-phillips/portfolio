import styled from 'styled-components'

export const ContactWrapper = styled.div`
	height: 300px;
	background-color: saddlebrown;
	text-align: center;
	padding: 50px;
`;

export const ContactH1 = styled.h1`
	padding: 10px;
`

export const ContactH3 = styled.h3`
	padding: 5px;
`

export const ContactA = styled.a`
	margin-top: 20px;
	padding: 10px;
	border-radius: 10px;
	background-color: rgba(0,0,0, 0.1);
	color: black;
	border: solid black 2px;
	cursor: none;
	text-decoration: none;

	:hover {
		color: white;
		scale: (200%)
	}
`