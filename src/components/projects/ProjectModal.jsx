import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import './ProjectModal.css';

function ProjectModal({ project, isOpen, onClose }) {
    const { t } = useTranslation();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isImageZoomed, setIsImageZoomed] = useState(false);
    const modalRef = useRef(null);
    const closeRef = useRef(null);

    const images = (project && project.images) ? project.images : (project ? [project.image] : []);

    const nextImage = useCallback(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const prevImage = useCallback(() => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    const goToImage = useCallback((index) => {
        setCurrentImageIndex(index);
    }, []);

    const openImageZoom = useCallback(() => {
        setIsImageZoomed(true);
    }, []);

    const closeImageZoom = useCallback(() => {
        setIsImageZoomed(false);
    }, []);

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (!isOpen) return;

            if (e.key === 'Escape') {
                if (isImageZoomed) {
                    closeImageZoom();
                } else {
                    onClose();
                }
            } else if (images.length > 1 && !isImageZoomed) {
                if (e.key === 'ArrowLeft') {
                    prevImage();
                } else if (e.key === 'ArrowRight') {
                    nextImage();
                }
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyPress);
        }

        return () => document.removeEventListener('keydown', handleKeyPress);
    }, [isOpen, images.length, isImageZoomed, onClose, nextImage, prevImage, closeImageZoom]);

    useEffect(() => {
        if (isOpen) {
            setCurrentImageIndex(0);
            setIsImageZoomed(false);
        }
    }, [project, isOpen]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen || !modalRef.current) return;

        closeRef.current?.focus();

        const modal = modalRef.current;
        const getFocusable = () =>
            modal.querySelectorAll(
                'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );

        const handleTab = (e) => {
            if (e.key !== 'Tab') return;

            const focusable = getFocusable();
            if (!focusable.length) return;

            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };

        modal.addEventListener('keydown', handleTab);
        return () => modal.removeEventListener('keydown', handleTab);
    }, [isOpen]);

    if (!isOpen || !project) return null;

    const techList = project.tech.split(', ');
    const hasLinks = project.github || project.demo;

    return (
        <div className="project-modal-overlay" onClick={onClose}>
            <div
                ref={modalRef}
                className="project-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-modal-title"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    ref={closeRef}
                    type="button"
                    className="project-modal__close"
                    onClick={onClose}
                    aria-label={t('common.close')}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>

                <div className="project-modal__content">
                    <div className="project-modal__gallery">
                        <div className="gallery__main">
                            <div className="gallery__main-image">
                                <img
                                    src={images[currentImageIndex]}
                                    alt={`${project.title} - ${t('common.of')} ${currentImageIndex + 1}`}
                                    onClick={openImageZoom}
                                />

                                {images.length > 1 && (
                                    <>
                                        <button
                                            type="button"
                                            className="gallery__nav gallery__nav--prev"
                                            onClick={prevImage}
                                            aria-label={t('projects.prevProject')}
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <polyline points="15,18 9,12 15,6" />
                                            </svg>
                                        </button>

                                        <button
                                            type="button"
                                            className="gallery__nav gallery__nav--next"
                                            onClick={nextImage}
                                            aria-label={t('projects.nextProject')}
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <polyline points="9,18 15,12 9,6" />
                                            </svg>
                                        </button>
                                    </>
                                )}
                            </div>

                            {images.length > 1 && (
                                <div className="gallery__footer">
                                    <div className="gallery__thumbnails">
                                        {images.map((image, index) => (
                                            <button
                                                key={index}
                                                type="button"
                                                className={`gallery__thumbnail ${index === currentImageIndex ? 'gallery__thumbnail--active' : ''}`}
                                                onClick={() => goToImage(index)}
                                                aria-label={`${project.title} - ${index + 1}`}
                                                aria-current={index === currentImageIndex ? 'true' : undefined}
                                            >
                                                <img src={image} alt="" />
                                            </button>
                                        ))}
                                    </div>
                                    <span className="gallery__counter">
                                        {currentImageIndex + 1} {t('common.of')} {images.length}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="project-modal__info">
                        <div className="project-modal__header">
                            <h2 id="project-modal-title" className="project-modal__title">
                                {project.title}
                            </h2>

                            <div className="project-modal__tech">
                                {techList.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-tag--modal">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {hasLinks && (
                                <div className="project-modal__links">
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-modal__link project-modal__link--demo"
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                <polyline points="15 3 21 3 21 9" />
                                                <line x1="10" y1="14" x2="21" y2="3" />
                                            </svg>
                                            {t('common.liveDemo')}
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-modal__link project-modal__link--github"
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                            </svg>
                                            {t('common.repository')}
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>

                        <div className="project-modal__body">
                            <p className="project-modal__description">{project.description}</p>

                            <div className="project-modal__section">
                                <h3>{t('common.features')}</h3>
                                <ul className="project-modal__features-list">
                                    {Array.isArray(project.features) ? project.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    )) : (
                                        <li>{project.features}</li>
                                    )}
                                </ul>
                            </div>

                            {project.challenges && (
                                <div className="project-modal__section">
                                    <h3>{t('common.challenges')}</h3>
                                    <p className="project-modal__challenges-text">{project.challenges}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {isImageZoomed && (
                <div className="image-zoom-overlay" onClick={closeImageZoom}>
                    <div className="image-zoom-container" onClick={(e) => e.stopPropagation()}>
                        <button
                            type="button"
                            className="image-zoom-close"
                            onClick={closeImageZoom}
                            aria-label={t('common.close')}
                        >
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>

                        <img
                            src={images[currentImageIndex]}
                            alt={`${project.title} - ${t('common.of')} ${currentImageIndex + 1}`}
                            className="image-zoom-img"
                        />

                        {images.length > 1 && (
                            <>
                                <button
                                    type="button"
                                    className="image-zoom-nav image-zoom-nav--prev"
                                    onClick={prevImage}
                                    aria-label={t('projects.prevProject')}
                                >
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <polyline points="15,18 9,12 15,6" />
                                    </svg>
                                </button>

                                <button
                                    type="button"
                                    className="image-zoom-nav image-zoom-nav--next"
                                    onClick={nextImage}
                                    aria-label={t('projects.nextProject')}
                                >
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <polyline points="9,18 15,12 9,6" />
                                    </svg>
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProjectModal;
