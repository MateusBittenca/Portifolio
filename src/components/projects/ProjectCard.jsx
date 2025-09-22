import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import './ProjectCard.css';

function ProjectCard({ project, index, onClick }) {
    const { t } = useTranslation();
    
    return (
        <div className="project-card" onClick={() => onClick(project)}>
            <div className="project-card__image">
                <img src={project.image} alt={project.title} />
                <div className="project-card__overlay">
                    <span className="project-card__view">{t('common.viewProject')}</span>
                </div>
            </div>
            
            <div className="project-card__header">
                <div className="project-card__number">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="project-card__title">{project.title}</h3>
            </div>
            
            <div className="project-card__content">
                <p className="project-card__description">{project.description}</p>
                
                <div className="project-card__tech">
                    {project.tech.split(', ').map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag--card">
                            {tech}
                        </span>
                    ))}
                </div>
                
                <div className="project-card__actions">
                    <button className="project-card__button">
                        {t('common.viewProject')} →
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
