import React from 'react';
import { CarouselData } from './CarouselData';
import ProjectsCarousel from './ProjectsCarousel';
import { CarouselWrapper, FocusImg, FocusBox, FocusesWrapper,  ProjectsSectionWrapper, FocusH1 } from './ProjectsElements';
import efficiency from '../../images/efficiency.svg'
import flexibility from '../../images/flexibility.svg'
import detail from '../../images/detail.svg'
import creativity from '../../images/creativity.svg'

const Projects = () => {
    return (
		<ProjectsSectionWrapper>
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
			<CarouselWrapper>
				<ProjectsCarousel slides={CarouselData}/>
			</CarouselWrapper>
		</ProjectsSectionWrapper>
	);
};

export default Projects;