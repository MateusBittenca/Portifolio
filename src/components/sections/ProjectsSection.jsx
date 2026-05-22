import React, { useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import ProjectCard from '../projects/ProjectCard';
import ProjectModal from '../projects/ProjectModal';
import './ProjectsSection.css';
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
