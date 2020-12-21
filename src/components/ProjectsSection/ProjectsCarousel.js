import { React, useState } from 'react';
import { Card, CardCaption, CardLink,CardDescription, CardTitle, CarouselWrapper, CardContainer, CardImg, GithubIcon, WebsiteIcon, SocialIconLink, SocialIcons } from './ProjectsElements';
import { ArrowLeft, ArrowRight } from './ProjectsElements'

const ProjectsCarousel = ({ showcase }) => {
    const [count, setCount] = useState(0)

    const nextProject = () => {
        if (count === (showcase.length - 1)) {
            setCount(0)
        } else {
            setCount(count + 1);
        }
    };
    
    const prevProject = () => {
        if (count === 0) {
            setCount(showcase.length - 1)
        } else {
            setCount(count -1)
        }
	};


	return (
		<CarouselWrapper>
			<ArrowLeft onClick={prevProject}>Previous</ArrowLeft>
			<CardContainer>
				<Card>
					<CardImg
						src={showcase[count].img}
						alt={showcase[count].alt}></CardImg>
					<CardTitle>{showcase[count].title}</CardTitle>
					<CardDescription>
						{showcase[count].description}
					</CardDescription>
					<CardCaption>{showcase[count].caption}</CardCaption>
					<SocialIcons>
						<SocialIconLink
							href={`${showcase[count].weblink}`}
							target='_blank'>
							<WebsiteIcon />
						</SocialIconLink>
						<SocialIconLink
							href={`${showcase[count].github}`}
							target='_blank'>
							<GithubIcon />
						</SocialIconLink>
					</SocialIcons>
				</Card>
			</CardContainer>
			<ArrowRight onClick={nextProject}>Next</ArrowRight>
		</CarouselWrapper>
	);
};

export default ProjectsCarousel;
