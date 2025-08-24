import React from 'react';
import './ProjectCard.css';

function ProjectCard({ project, index }) {
    return (
        <div className="project-card">
            <div className="project-card__header">
                <div className="project-card__number">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="project-card__title">{project.title}</h3>
            </div>
            
            <div className="project-card__content">
                <p className="project-card__description">{project.description}</p>
                
                <div className="project-card__tech">
                    {project.tech.split(', ').map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                            {tech}
                        </span>
                    ))}
                </div>
                
                <a href={project.link} className="project-card__link">
                    Ver projeto →
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;
