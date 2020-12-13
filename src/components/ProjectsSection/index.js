import React from 'react';
import { CarouselData } from './CarouselData';
import ProjectsCarousel from './ProjectsCarousel';
import { CarouselWrapper, FocusImg, Focus, FocusesWrapper,  ProjectsSectionWrapper } from './ProjectsElements';
import efficiency from '../../images/efficiency.svg'
import flexibility from '../../images/flexibility.svg'
import detail from '../../images/detail.svg'
import creativity from '../../images/creativity.svg'

const Projects = () => {
    return (
		<ProjectsSectionWrapper>
			<FocusesWrapper>
				<Focus>Effeciency
					<FocusImg src={efficiency}/>
				</Focus>
				<Focus>Flexibility
					<FocusImg src={flexibility}/>
				</Focus>
				<Focus>Attention to Detail
					<FocusImg src={detail}/>
				</Focus>
				<Focus>Creativity
					<FocusImg src={creativity}/>
				</Focus>
			</FocusesWrapper>
			<CarouselWrapper>
				<ProjectsCarousel slides={CarouselData}/>
			</CarouselWrapper>
		</ProjectsSectionWrapper>
	);
};

export default Projects;