import { faServer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard';

const projectServer = [
    {   
        id: 1,
        img: "https://i.ibb.co/5RW84dV/imgix-kl-WUhr-w-PJ8-unsplash.jpg",
        name:"Charlie 402",
        location: 'Berlin, Germany'
    },
    {
        id: 2,
        img: "https://i.ibb.co/85T1qKk/taylor-vick-M5tz-Zt-FCOfs-unsplash.jpg",
        name:"Roger 808",
        location: "Washington City, USA"
    },
    {
        id: 3,
        img: "https://i.ibb.co/YhXbVW7/server-room.jpg",
        name:"Shepherd X01",
        location: "Singapore City, Singapore"
    }
]

const Projects = () => {
    return (
        <div>
            <section id="projects" className="container text-center mb-5 mt-3">
                <h5><FontAwesomeIcon style={{fontSize: '40px'}} icon={faServer}></FontAwesomeIcon></h5>
                <h2 className="p-3">Powerful Servers Projects Around the World!</h2>
            <div className="row justify-content-center">
                {
                    projectServer.map(project => <ProjectCard key={project.id} project={project}></ProjectCard> )
                }
                
            </div>
        </section>
        </div>
    );
};

export default Projects;