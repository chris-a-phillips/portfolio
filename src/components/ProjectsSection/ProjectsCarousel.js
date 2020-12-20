import { React, useState } from 'react';
import { Card, CardCaption, CardLink,CardDescription, CardTitle, CarouselWrapper, CardContainer, CardImg, CardContent } from './ProjectsElements';
import gitWrap from '../../images/gitwrap.gif'
import relocateMe from '../../images/relocate-me.gif'
import humanPrinciple from '../../images/human-principle.gif'


const ProjectsCarousel = ({ showcaseProject }) => {
    const [project, setProject] = useState('')
    // const projectOne = () => {
    //     setProject('');
    // };

    // const projectTwo = () => {
    //     setProject('');
    // };

    // const projectThree = () => {
    //     setProject('');
    // };

	return (
		<CarouselWrapper>

			<CardContainer>
				<Card>
					<CardImg src={gitWrap}></CardImg>
					<CardTitle>title</CardTitle>
					<CardCaption>caption</CardCaption>
					<CardDescription>description</CardDescription>
					<CardLink>link</CardLink>
				</Card>
			</CardContainer>
{/* 
			<CardContainer>
				<Card>
					<CardImg src={relocateMe}></CardImg>
					<CardTitle>title</CardTitle>
					<CardCaption>caption</CardCaption>
					<CardDescription>description</CardDescription>
					<CardLink>link</CardLink>
				</Card>
			</CardContainer>

			<CardContainer>
				<Card>
					<CardImg src={humanPrinciple}></CardImg>
					<CardTitle>title</CardTitle>
					<CardCaption>caption</CardCaption>
					<CardDescription>description</CardDescription>
					<CardLink>link</CardLink>
				</Card>
			</CardContainer> */}
			{/* {formType === 'Mental' ? (
				<QuestionForm
					user={user}
					token={token}
					{...mentalTemplate}
					formType={formType}
				/>
			) : null}
			{formType === 'Physical' ? (
				<QuestionForm
					user={user}
					token={token}
					{...physicalTemplate}
					formType={formType}
				/>
			) : null}
			{formType === 'Emotional' ? (
				<QuestionForm
					user={user}
					token={token}
					{...emotionalTemplate}
					formType={formType}
				/>
			) : null} */}
		</CarouselWrapper>
	);
};

export default ProjectsCarousel;
