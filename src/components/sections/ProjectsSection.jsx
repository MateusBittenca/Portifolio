import React, { useState } from 'react';
import ProjectCard from '../projects/ProjectCard';
import ProjectModal from '../projects/ProjectModal';
import portifolioImg from '../../assets/img/portifolio.png';
import gastosImg from '../../assets/img/Sistema de gastos de obra.png';


function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const projects = [
        { 
            title: 'Portfólio Profissional', 
            description: 'Website pessoal desenvolvido com React, apresentando projetos, habilidades técnicas e experiência profissional com design moderno e responsivo.',
            tech: 'React, CSS3, JavaScript, HTML5',
            image: portifolioImg,
            features: [
                'Design responsivo e moderno com animações CSS',
                'Seções organizadas para projetos e habilidades',
                'Formulário de contato funcional integrado',
                'Otimização para SEO e performance',
                'Componentes reutilizáveis e código limpo'
            ],
            challenges: 'Criar uma interface atrativa que representasse minha identidade profissional, implementando animações suaves sem comprometer a performance, e estruturar o código de forma modular para facilitar futuras atualizações.',
            github: 'https://github.com/seu-usuario/portfolio',
            demo: 'https://meu-portfolio.vercel.app'
        },
        {
            title: 'Sistema de Gestão de Gastos de Obra',
            description: 'Aplicação web completa para controle e monitoramento de gastos em projetos de construção civil, com dashboard interativo e relatórios detalhados.',
            tech: 'React, Node.js, MongoDB, Tailwind CSS',
            image: gastosImg,
            features: [
                'Dashboard interativo com gráficos e métricas',
                'Controle de gastos por categoria e setor',
                'Sistema de usuários com permissões',
                'Relatórios exportáveis em PDF',
                'Interface responsiva para mobile e desktop'
            ],
            challenges: 'Desenvolver um sistema robusto para gestão financeira de obras, implementando validações complexas de orçamentos e criando visualizações de dados intuitivas para engenheiros e gestores.',
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
                    <h2>Projetos</h2>
                    <p>Alguns dos projetos que desenvolvi para demonstrar minhas habilidades</p>
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
