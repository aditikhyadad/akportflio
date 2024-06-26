import React from 'react';
import PortFolioImg from '../assets/projects/Imgportfolio.png';
import Minor from '../assets/projects/Minor_Proj.png';
import Mini from '../assets/projects/Mini_Proj.png';
import ML from '../assets/projects/ML.png';
import IRCA from '../assets/projects/IRCA.png';
import SearchEngine from '../assets/projects/SearchEngine.png';

export const data = [
    {
        id: 1,
        name: "Gender Age and Emotion Detection.",
        image: ML,
        github: "https://github.com/aditikhyadad/resume/tree/main/Gender_Age_Emotion_Detection",
        live: "https://github.com/aditikhyadad/resume/tree/main/Gender_Age_Emotion_Detection",
    },
    {
        id: 2,
        name: "CIFAR-100 classification using Generative AI",
        image: Mini,
        github: "https://github.com/aditikhyadad/resume/tree/main/Miniproject",
        live: "https://github.com/aditikhyadad/resume/tree/main/Miniproject",
    },
    {
        id: 3,
        name: "Data Clustering Algorithm using Firefly and Particles of Optimization",
        image: Minor,
        github: "https://github.com/aditikhyadad/resume/tree/main/Minor_Project",
        live: "https://github.com/aditikhyadad/resume/tree/main/Minor_Project",
    },
    {
        id: 4,
        name: "Portfolio using React Framework",
        image: PortFolioImg,
        github: "https://github.com/aditikhyadad/resume/tree/main/OOPS",
        live: "",
    },
    {
        id: 5,
        name: "IRCA App using Angular",
        image: IRCA,
        github: "https://github.com/aditikhyadad/resume/tree/main/IRCA",
        live: "https://aditikhyadad.github.io/WebTech/",
    },
    {
        id: 6,
        name: "Internship: Wikipedia crawler on Ancient Indian Science data",
        image: SearchEngine,
        github: "https://github.com/aditikhyadad/resume/tree/main/Internship",
        live: "https://github.com/aditikhyadad/resume/tree/main/Internship",
    },
];

const Portfolio = () => {
    const handleReload = (e) => {
        e.preventDefault();
        window.location.reload();
    };

    return (
        <div>
            {data.map((project) => (
                <div key={project.id}>
                    <h2>{project.name}</h2>
                    <img src={project.image} alt={project.name} />
                    <p>
                        {project.name === "Portfolio using React Framework" ? (
                            <>
                                <a href={project.github} onClick={handleReload}>GitHub</a> | 
                                <a href={project.live} onClick={handleReload}>Live</a>
                            </>
                        ) : (
                            <>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a> | 
                                <a href={project.live} target="_blank" rel="noopener noreferrer">Live</a>
                            </>
                        )}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Portfolio;