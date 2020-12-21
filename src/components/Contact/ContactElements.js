import styled from 'styled-components'
import bg from '../../images/background.jpeg'

export const ContactWrapper = styled.div`
	height: 500px;
	text-align: center;
	padding: 50px;
	color: #1bcef7;
	background-color: rgba(0,0,0,0.4);
`;

export const ContactH1 = styled.h1`
	padding: 10px;
	margin-top: 25px;
`

export const ContactH3 = styled.h3`
	padding: 5px;
	margin: 20px 0 25px;
`

export const ContactA = styled.a`
	border: solid white 5px;
	border-radius: 5px;
	color: white;
	background-color: black;
	padding: 5px;
	text-decoration: none;
	cursor: none;

	:hover {
		color: #1aeddc;
		border: groove #1aeddc 5px;
	}
`;

export const ContactBg = styled.div`
	background-image: url(${bg});
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;