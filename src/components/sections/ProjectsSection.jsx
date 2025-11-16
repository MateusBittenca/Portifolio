import React, { useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import ProjectCard from '../projects/ProjectCard';
import ProjectModal from '../projects/ProjectModal';
import './ProjectsSection.css';
import portifolioImg from '../../assets/img/portifolio.png';
import portifolioImg2 from '../../assets/img/portifolio-2.png';
import portifolioImg3 from '../../assets/img/portifolio-3.png';
import gastosImg2 from '../../assets/img/sistema de gastos de obra-2.png';
import gastosImg3 from '../../assets/img/sistema de gastos de obra-3.png';
import gastosImg from '../../assets/img/Sistema de gastos de obra.png';
import tccImg from '../../assets/img/TCC.png';
import tccImg2 from '../../assets/img/TCC-2.png';
import tccImg3 from '../../assets/img/TCC-3.png';


function ProjectsSection() {
    const { t } = useTranslation();
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const projects = [
        { 
            title: t('projects.portfolio.title'),
            description: t('projects.portfolio.description'),
            tech: 'React, CSS3, JavaScript, HTML5',
            image: portifolioImg, // Imagem principal (compatibilidade)
            images: [
                portifolioImg, 
                portifolioImg2,
                portifolioImg3
            ], // Galeria de imagens
            features: t('projects.portfolio.features'),
            challenges: t('projects.portfolio.challenges'),
            github: 'https://github.com/MateusBittenca/Portifolio',
            demo: 'https://meu-portfolio.vercel.app'
        },
        {
            title: t('projects.expenses.title'),
            description: t('projects.expenses.description'),
            tech: 'Python, MySQL, Tailwind CSS , FastAPI',
            image: gastosImg, // Imagem principal (compatibilidade)
            images: [
                gastosImg,
                gastosImg2,
                gastosImg3
            ], // Galeria de imagens
            features: t('projects.expenses.features'),
            challenges: t('projects.expenses.challenges'),
            github: 'https://github.com/MateusBittenca/Or-amentos-sistema',
            demo: 'https://sistema-gastos-obra.vercel.app'
        },
        {
            title: t('projects.TCC.title'),
            description: t('projects.TCC.description'),
            tech: 'JavaScript, Node.js, MySQL, Tailwind CSS',
            image: tccImg, // Imagem principal (compatibilidade)
            images: [
                tccImg,
                tccImg2,
                tccImg3
            ], // Galeria de imagens
            features: t('projects.TCC.features'),
            challenges: t('projects.TCC.challenges'),
            github: 'https://github.com/MateusBittenca/TCC',
            
        }
        
    ];

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="section-header">
                    <h2>{t('projects.title')}</h2>
                    <p>{t('projects.subtitle')}</p>
                </div>
            </div>
            
            <div className="projects__grid">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index} 
                        project={project} 
                        index={index}
                        onClick={handleProjectClick}
                    />
                ))}
            </div>

            <ProjectModal 
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </section>
    );
}

export default ProjectsSection;
