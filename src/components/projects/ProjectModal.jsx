import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import './ProjectModal.css';

function ProjectModal({ project, isOpen, onClose }) {
    // ✅ HOOKS SEMPRE NO TOPO - ANTES DE QUALQUER RETURN
    const { t } = useTranslation();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isImageZoomed, setIsImageZoomed] = useState(false);
    
    // Evita erro quando project é null
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

    // Navegação por teclado
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (!isOpen) return;
            
            if (e.key === 'Escape') {
                if (isImageZoomed) {
                    closeImageZoom();
                } else {
                    onClose();
                }
            } else if (images.length > 1) {
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

    // Reset index e zoom quando abrir novo projeto
    useEffect(() => {
        if (isOpen) {
            setCurrentImageIndex(0);
            setIsImageZoomed(false);
        }
    }, [project, isOpen]);

    // ✅ EARLY RETURN AGORA VEM DEPOIS DOS HOOKS
    if (!isOpen || !project) return null;

    return (
        <div className="project-modal-overlay" onClick={onClose}>
            <div className="project-modal" onClick={(e) => e.stopPropagation()}>
                <button className="project-modal__close" onClick={onClose}>
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
                                    alt={`${project.title} - Imagem ${currentImageIndex + 1}`}
                                    onClick={openImageZoom}
                                    style={{ cursor: 'zoom-in' }}
                                />
                                
                                {images.length > 1 && (
                                    <>
                                        <div className="gallery__counter">
                                            {currentImageIndex + 1} {t('common.of')} {images.length}
                                        </div>
                                        <button className="gallery__nav gallery__nav--prev" onClick={prevImage}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <polyline points="15,18 9,12 15,6"></polyline>
                                            </svg>
                                        </button>
                                        
                                        <button className="gallery__nav gallery__nav--next" onClick={nextImage}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <polyline points="9,18 15,12 9,6"></polyline>
                                            </svg>
                                        </button>
                                        
                                        <div className="gallery__indicators">
                                            {images.map((_, index) => (
                                                <button 
                                                    key={index} 
                                                    className={`gallery__indicator ${index === currentImageIndex ? 'gallery__indicator--active' : ''}`}
                                                    onClick={() => goToImage(index)}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                            
                            {images.length > 1 && (
                                <div className="gallery__thumbnails">
                                    {images.map((image, index) => (
                                        <button 
                                            key={index} 
                                            className={`gallery__thumbnail ${index === currentImageIndex ? 'gallery__thumbnail--active' : ''}`}
                                            onClick={() => goToImage(index)}
                                        >
                                            <img src={image} alt={`${project.title} - Miniatura ${index + 1}`} />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    
                    <div className="project-modal__info">
                        <h2 className="project-modal__title">{project.title}</h2>
                        <p className="project-modal__description">{project.description}</p>
                        
                        <div className="project-modal__details">
                            <div className="project-modal__section">
                                <h3>{t('common.features')}</h3>
                                <ul>
                                    {Array.isArray(project.features) ? project.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    )) : (
                                        <li>{project.features}</li>
                                    )}
                                </ul>
                            </div>
                            
                            <div className="project-modal__section">
                                <h3>{t('common.technologies')}</h3>
                                <div className="project-modal__tech">
                                    {project.tech.split(', ').map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag--modal">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            {project.challenges && (
                                <div className="project-modal__section">
                                    <h3>{t('common.challenges')}</h3>
                                    <p className="project-modal__challenges">{project.challenges}</p>
                                </div>
                            )}
                            
                            {project.github && (
                                <div className="project-modal__section">
                                    <h3>Links</h3>
                                    <div className="project-modal__links">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-modal__link">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                </svg>
                                                {t('common.repository')}
                                            </a>
                                        )}
                            
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Overlay para imagem ampliada */}
            {isImageZoomed && (
                <div className="image-zoom-overlay" onClick={closeImageZoom}>
                    <div className="image-zoom-container" onClick={(e) => e.stopPropagation()}>
                        <button className="image-zoom-close" onClick={closeImageZoom}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        
                        <img 
                            src={images[currentImageIndex]} 
                            alt={`${project.title} - Imagem ampliada ${currentImageIndex + 1}`}
                            className="image-zoom-img"
                        />
                        
                        {images.length > 1 && (
                            <>
                                <button className="image-zoom-nav image-zoom-nav--prev" onClick={prevImage}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <polyline points="15,18 9,12 15,6"></polyline>
                                    </svg>
                                </button>
                                
                                <button className="image-zoom-nav image-zoom-nav--next" onClick={nextImage}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <polyline points="9,18 15,12 9,6"></polyline>
                                    </svg>
                                </button>
                                
                                <div className="image-zoom-counter">
                                    {currentImageIndex + 1} {t('common.of')} {images.length}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProjectModal;
