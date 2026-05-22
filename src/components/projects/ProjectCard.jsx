import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import './ProjectCard.css';

const MAX_VISIBLE_TAGS = 3;

function ProjectCard({ project, index, onClick }) {
    const { t } = useTranslation();
    const techList = project.tech.split(', ');
    const visibleTags = techList.slice(0, MAX_VISIBLE_TAGS);
    const hiddenCount = techList.length - MAX_VISIBLE_TAGS;

    return (
        <div className="project-card" onClick={() => onClick(project)}>
            <div className="project-card__image">
                <img src={project.image} alt={project.title} />
                <span className="project-card__number">{String(index + 1).padStart(2, '0')}</span>
                <div className="project-card__overlay">
                    <span className="project-card__view">{t('common.viewProject')}</span>
                </div>
            </div>

            <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>

                <div className="project-card__tech">
                    {visibleTags.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag--card">
                            {tech}
                        </span>
                    ))}
                    {hiddenCount > 0 && (
                        <span className="tech-tag--card tech-tag--more">+{hiddenCount}</span>
                    )}
                </div>

                <span className="project-card__link">{t('common.viewDetails')} →</span>
            </div>
        </div>
    );
}

export default ProjectCard;
