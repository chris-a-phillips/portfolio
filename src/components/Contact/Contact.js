import React from 'react';
import { ContactA, ContactBg, ContactH1, ContactH3, ContactWrapper } from './SCAbout';


const Contact = () => {
    return (
		<ContactBg>
			<ContactWrapper id={'contact'}>
				<ContactH1>Contact Me</ContactH1>
				<ContactH3>
					I'm always looking for new opportunities and ways to
					collaborate. <br />
					Whether it's just a casual hello, a question, or anything
					else, I'll make sure to get back to you.
				</ContactH3>
				<ContactH3></ContactH3>
				<ContactA
					href='mailto:phillipsachris@gmail.com?
                &subject=Hello%20from
                &body=My%20name%20is%20{insert_name}%20and%20%20I%20saw%20your%20portfolio%20and%20wanted%20to%20say%20hello.'>
					Say Hello
				</ContactA>
			</ContactWrapper>
		</ContactBg>
	);
};

export default Contact;