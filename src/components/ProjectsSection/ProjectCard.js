import React from 'react';
import { Card, CardContainer, CardDescription, CardImg, CardInfo, CardLink, CardTitle, ImgContainer, LinkWrapper } from './ProjectCardElements';

const ProjectCard = ({ img, alt }) => {
    return (
        <>
        <CardContainer>
            <Card>
                <ImgContainer>
                    <CardImg src={img} alt={alt}/>
                </ImgContainer>
                <CardInfo>
                    <CardTitle></CardTitle>
                    <CardDescription></CardDescription>
                    <LinkWrapper>
                    <CardLink></CardLink>
                    </LinkWrapper>
                </CardInfo>
            </Card>
        </CardContainer>
        </>
    );
};

export default ProjectCard;