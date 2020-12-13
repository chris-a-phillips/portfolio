import React from 'react';
import { CarouselData } from './CarouselData';
import ProjectsCarousel from './ProjectsCarousel';
import { CarouselWrapper, Focus, FocusesWrapper,  ProjectsSectionWrapper } from './ProjectsElements';

const Projects = () => {
    return (
		<ProjectsSectionWrapper>
			<FocusesWrapper>
				<Focus>Effeciency</Focus>
				<Focus>Polish</Focus>
				<Focus>Focus 3</Focus>
				<Focus>Focus 4</Focus>
			</FocusesWrapper>
			<CarouselWrapper>
				<ProjectsCarousel slides={CarouselData}/>
			</CarouselWrapper>
		</ProjectsSectionWrapper>
	);
};

export default Projects;