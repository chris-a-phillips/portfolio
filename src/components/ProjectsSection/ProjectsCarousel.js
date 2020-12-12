import { React } from 'react';
import { CarouselWrapper } from './ProjectsElements';


const ProjectsCarousel = ({ slides }) => {

	return (
		<CarouselWrapper>
            <ul>
                Showcase
                <li>project 2</li>
                <li>project 3</li>
                <li>project 4</li>
                Carousel
                <li>
                    visual moving board (like a video; with little stuff made
                    throughout course; click it to open the page with an
                    animation like a curtain is opening)
                </li>
            </ul>
		</CarouselWrapper>
	);
};

export default ProjectsCarousel;
