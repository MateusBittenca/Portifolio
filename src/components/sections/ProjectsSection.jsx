import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import ProjectCard from '../projects/ProjectCard';
import ProjectModal from '../projects/ProjectModal';
import './ProjectsSection.css';
import fiImg from '../../assets/img/projeto-financas.png';
import fiImg2 from '../../assets/img/projeto-financas-2.png';
import fiImg3 from '../../assets/img/projeto-financas-3.png';
import fiImg4 from '../../assets/img/projeto-financas-4.png';
import gastosImg2 from '../../assets/img/sistema de gastos de obra-2.png';
import gastosImg3 from '../../assets/img/sistema de gastos de obra-3.png';
import gastosImg from '../../assets/img/Sistema de gastos de obra.png';
import tccImg from '../../assets/img/TCC.png';
import tccImg2 from '../../assets/img/TCC-2.png';
import tccImg3 from '../../assets/img/TCC-3.png';
import imoveisImg from '../../assets/img/Imoveis.png';
import imoveisImg2 from '../../assets/img/Imvoeis2.png';
import imoveisImg3 from '../../assets/img/Imoveis3.png';
import imoveisImg4 from '../../assets/img/Imoveis4.png';
import imoveisImg5 from '../../assets/img/imoveis5.png';


function ProjectsSection() {
    const { t } = useTranslation();
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const gridRef = useRef(null);

    const projects = [
        {
            title: t('projects.fi.title'),
            description: t('projects.fi.description'),
            tech: 'TypeScript, Vite, Fastify, PostgreSQL, Docker, JWT',
            image: fiImg,
            images: [
                fiImg,
                fiImg2,
                fiImg3,
                fiImg4
            ],
            features: t('projects.fi.features'),
            challenges: t('projects.fi.challenges'),
        },
        {
            title: t('projects.expenses.title'),
            description: t('projects.expenses.description'),
            tech: 'Python, MySQL, Tailwind CSS, Chart.js',
            image: gastosImg,
            images: [
                gastosImg,
                gastosImg2,
                gastosImg3
            ],
            features: t('projects.expenses.features'),
            challenges: t('projects.expenses.challenges'),
            github: 'https://github.com/MateusBittenca/Or-amentos-sistema',
            demo: 'https://sistema-gastos-obra.vercel.app'
        },
        {
            title: t('projects.unifit.title'),
            description: t('projects.unifit.description'),
            tech: 'JavaScript, Node.js, MySQL',
            image: tccImg,
            images: [
                tccImg,
                tccImg2,
                tccImg3
            ],
            features: t('projects.unifit.features'),
            challenges: t('projects.unifit.challenges'),
            github: 'https://github.com/MateusBittenca/TCC',
        },
        {
            title: t('projects.consultoria.title'),
            description: t('projects.consultoria.description'),
            tech: 'HTML, Tailwind CSS, JavaScript, Material Symbols',
            image: imoveisImg,
            images: [
                imoveisImg,
                imoveisImg2,
                imoveisImg3,
                imoveisImg4,
                imoveisImg5
            ],
            features: t('projects.consultoria.features'),
            challenges: t('projects.consultoria.challenges'),
            github: 'https://github.com/MateusBittenca/Consultoria-imoveis',
        }
    ];

    const updateScrollState = useCallback(() => {
        const el = gridRef.current;
        if (!el) return;

        const { scrollLeft, scrollWidth, clientWidth } = el;
        setCanScrollLeft(scrollLeft > 4);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);

        const cards = el.querySelectorAll('.project-card');
        if (!cards.length) return;

        const center = scrollLeft + clientWidth / 2;
        let closest = 0;
        let minDist = Infinity;

        cards.forEach((card, i) => {
            const cardCenter = card.offsetLeft + card.offsetWidth / 2;
            const dist = Math.abs(center - cardCenter);
            if (dist < minDist) {
                minDist = dist;
                closest = i;
            }
        });

        setActiveIndex(closest);
    }, []);

    useEffect(() => {
        const el = gridRef.current;
        if (!el) return;

        updateScrollState();
        el.addEventListener('scroll', updateScrollState, { passive: true });
        window.addEventListener('resize', updateScrollState);

        return () => {
            el.removeEventListener('scroll', updateScrollState);
            window.removeEventListener('resize', updateScrollState);
        };
    }, [updateScrollState, projects.length]);

    const scrollTo = (direction) => {
        const el = gridRef.current;
        if (!el) return;

        const card = el.querySelector('.project-card');
        const gap = 24;
        const scrollAmount = card ? card.offsetWidth + gap : 380;

        el.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    };

    const scrollToIndex = (index) => {
        const el = gridRef.current;
        if (!el) return;

        const cards = el.querySelectorAll('.project-card');
        const card = cards[index];
        if (!card) return;

        el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: 'smooth' });
    };

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    const showCarouselControls = canScrollLeft || canScrollRight;

    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="section-header">
                    <h2>{t('projects.title')}</h2>
                    <p>{t('projects.subtitle')}</p>
                </div>
            </div>

            <div className="projects__carousel">
                {showCarouselControls && (
                    <button
                        type="button"
                        className="projects__nav projects__nav--prev"
                        onClick={() => scrollTo(-1)}
                        disabled={!canScrollLeft}
                        aria-label={t('projects.prevProject')}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15,18 9,12 15,6" />
                        </svg>
                    </button>
                )}

                <div className="projects__grid" ref={gridRef}>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            index={index}
                            onClick={handleProjectClick}
                        />
                    ))}
                </div>

                {showCarouselControls && (
                    <button
                        type="button"
                        className="projects__nav projects__nav--next"
                        onClick={() => scrollTo(1)}
                        disabled={!canScrollRight}
                        aria-label={t('projects.nextProject')}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9,18 15,12 9,6" />
                        </svg>
                    </button>
                )}
            </div>

            {showCarouselControls && (
                <div className="projects__controls">
                    <p className="projects__hint">{t('projects.scrollHint')}</p>
                    <div className="projects__dots" role="tablist" aria-label={t('projects.title')}>
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                role="tab"
                                className={`projects__dot ${index === activeIndex ? 'projects__dot--active' : ''}`}
                                onClick={() => scrollToIndex(index)}
                                aria-label={`${t('projects.title')} ${index + 1}`}
                                aria-selected={index === activeIndex}
                            />
                        ))}
                    </div>
                </div>
            )}

            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </section>
    );
}

export default ProjectsSection;
