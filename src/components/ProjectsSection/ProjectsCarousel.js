import { React } from 'react';
import { Card, CardCaption, CardLink,CardDescription, CardTitle, CarouselWrapper, CardContainer, CardImg, CardContent } from './ProjectsElements';
import gitWrap from '../../images/gitwrap.gif'
import relocateMe from '../../images/relocate-me.gif'
import humanPrinciple from '../../images/human-principle.gif'


const ProjectsCarousel = ({ slides }) => {
	return (
		<CarouselWrapper>
            {/* <ul>
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
            </ul> */}
            {/* <ProjectImg src={gitWrap} alt={'Gitwrap Website GIF'}/>
            <ProjectImg src={relocateMe} alt={'Relocate Me Website GIF'}/>
            <ProjectImg src={humanPrinciple} alt={'Human Principle Website GIF'}/> */}
            <CardContainer>
                <Card>
                    <CardImg src={gitWrap}></CardImg>
                    <CardTitle>title</CardTitle>
                    <CardCaption>caption</CardCaption>
                    <CardDescription>description</CardDescription>
                    <CardLink>link</CardLink>
                </Card>
            </CardContainer>
		</CarouselWrapper>
	);
};

export default ProjectsCarousel;
