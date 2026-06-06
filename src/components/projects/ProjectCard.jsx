import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import './ProjectCard.css';

const MAX_VISIBLE_TAGS = 3;

function ProjectCard({ project, index, onClick }) {
    const { t } = useTranslation();
    const techList = project.tech.split(', ');
    const visibleTags = techList.slice(0, MAX_VISIBLE_TAGS);
    const hiddenCount = techList.length - MAX_VISIBLE_TAGS;
    const isFeatured = project.featured;

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick(project);
        }
    };

    const cardStyle = isFeatured && project.accentColor
        ? { '--card-accent': project.accentColor }
        : undefined;

    return (
        <div
            className={`project-card${isFeatured ? ' project-card--featured' : ''}`}
            style={cardStyle}
            role="button"
            tabIndex={0}
            onClick={() => onClick(project)}
            onKeyDown={handleKeyDown}
        >
            <div className="project-card__image">
                <img src={project.image} alt={project.title} />
                <span className="project-card__number">{String(index + 1).padStart(2, '0')}</span>
                {isFeatured && project.featuredBadge && (
                    <span className="project-card__badge">{project.featuredBadge}</span>
                )}
                <div className="project-card__overlay">
                    <span className="project-card__view">
                        {t('common.viewProject')}
                        {project.demo && (
                            <svg className="project-card__external-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                        )}
                    </span>
                </div>
            </div>

            <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>

                {project.description && (
                    <p className="project-card__description">{project.description}</p>
                )}

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
