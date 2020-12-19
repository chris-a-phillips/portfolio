import React from 'react';
// import { CarouselData } from './CarouselData';
import ProjectsCarousel from './ProjectsCarousel';
import { FocusImg, FocusBox, FocusesWrapper,  ProjectsSectionWrapper, FocusH1 } from './ProjectsElements';
import efficiency from '../../images/efficiency.svg'
import flexibility from '../../images/flexibility.svg'
import detail from '../../images/detail.svg'
import creativity from '../../images/creativity.svg'

const Projects = () => {
    return (
		<ProjectsSectionWrapper id='projects'>
			<ProjectsCarousel>
				{/* <ProjectsCarousel slides={CarouselData}/> */}
			</ProjectsCarousel>
			<FocusesWrapper>
				<FocusBox>
					<FocusImg src={efficiency}/>
					<FocusH1>Efficiency</FocusH1>
				</FocusBox>
				<FocusBox>
					<FocusImg src={flexibility}/>
					<FocusH1>Flexibility</FocusH1>
				</FocusBox>
				<FocusBox>
					<FocusImg src={detail}/>
					<FocusH1>Attention To Detail</FocusH1>
				</FocusBox>
				<FocusBox>
					<FocusImg src={creativity}/>
					<FocusH1>Creativity</FocusH1>
				</FocusBox>
			</FocusesWrapper>
		</ProjectsSectionWrapper>
	);
};

export default Projects;