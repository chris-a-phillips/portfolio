import React from 'react';
import ProjectsCarousel from './ProjectsCarousel';
import {
	FocusImg,
	FocusBox,
	FocusesWrapper,
	ProjectsBg,
	ProjectsSectionWrapper,
	FocusH1,
} from './ProjectsElements';
import efficiency from '../../images/focus-svgs/efficiency.svg';
import flexibility from '../../images/focus-svgs/flexibility.svg';
import detail from '../../images/focus-svgs/detail.svg';
import creativity from '../../images/focus-svgs/creativity.svg';
import { showcase } from './CarouselData';
import { ParallaxSeparator } from '../../SCApp';

const Projects = () => {
	return (
		<ProjectsBg>
			<ProjectsSectionWrapper id='projects'>
				<ProjectsCarousel showcase={showcase} />
					<FocusesWrapper>
						<FocusBox>
							<FocusImg src={efficiency} />
							<FocusH1>Efficiency</FocusH1>
						</FocusBox>
						<FocusBox>
							<FocusImg src={flexibility} />
							<FocusH1>Flexibility</FocusH1>
						</FocusBox>
						<FocusBox>
							<FocusImg src={detail} />
							<FocusH1>Attention To Detail</FocusH1>
						</FocusBox>
						<FocusBox>
							<FocusImg src={creativity} />
							<FocusH1>Creativity</FocusH1>
						</FocusBox>
					</FocusesWrapper>
			</ProjectsSectionWrapper>
			<ParallaxSeparator />
		</ProjectsBg>
	);
};

export default Projects;
