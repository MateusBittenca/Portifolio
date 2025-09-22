import React, { useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import ProjectCard from '../projects/ProjectCard';
import ProjectModal from '../projects/ProjectModal';
import portifolioImg from '../../assets/img/portifolio.png';
import gastosImg from '../../assets/img/Sistema de gastos de obra.png';


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
                portifolioImg,
                portifolioImg
            ], // Galeria de imagens
            features: t('projects.portfolio.features'),
            challenges: t('projects.portfolio.challenges'),
            github: 'https://github.com/seu-usuario/portfolio',
            demo: 'https://meu-portfolio.vercel.app'
        },
        {
            title: t('projects.expenses.title'),
            description: t('projects.expenses.description'),
            tech: 'React, Node.js, MongoDB, Tailwind CSS',
            image: gastosImg, // Imagem principal (compatibilidade)
            images: [
                gastosImg,
                gastosImg,
                gastosImg
            ], // Galeria de imagens
            features: t('projects.expenses.features'),
            challenges: t('projects.expenses.challenges'),
            github: 'https://github.com/seu-usuario/sistema-gastos-obra',
            demo: 'https://sistema-gastos-obra.vercel.app'
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
