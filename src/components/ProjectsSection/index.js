import React from 'react';
import { cardOne, cardTwo, cardThree } from './CardData'
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <>
            Projects
            <ul>Showcase
                <li>project 2</li>
                <li>project 3</li>
                <li>project 4</li>
                Carousel
                <li>visual moving board (like a video; with little stuff made throughout course; click it to open the page with an animation like a curtain is opening)</li>
            </ul>
            <ProjectCard {...cardOne}/>
            <ProjectCard {...cardTwo}/>
            <ProjectCard {...cardThree}/>
        </>
    );
};

export default Projects;