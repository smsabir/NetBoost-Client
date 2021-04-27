import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({project}) => {
    return (
        <div className="col-md-3 col-0  project-card">
                    <div className="img container">
                        <img src={project.img} alt={"img"} />
                    </div>
                    <div style={{padding: '15px'}}>
                        <p >{project.name}</p>
                        <p><FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon> {project.location}</p>
                    </div>
                
        </div>
    );
};

export default ProjectCard;