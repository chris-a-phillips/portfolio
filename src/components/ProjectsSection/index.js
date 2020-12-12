import React from 'react';
import { CarouselWrapper, Focuses, ProjectsSectionWrapper } from './ProjectsElements';

const Projects = () => {
    return (
		<ProjectsSectionWrapper>
			<Focuses>focuses: effeciency, polish, </Focuses>
			<CarouselWrapper>
				<ul>
					Showcase
					<li>project 2</li>
					<li>project 3</li>
					<li>project 4</li>
					Carousel
					<li>
						visual moving board (like a video; with little stuff
						made throughout course; click it to open the page with
						an animation like a curtain is opening)
					</li>
				</ul>
			</CarouselWrapper>
		</ProjectsSectionWrapper>
	);
};

export default Projects;