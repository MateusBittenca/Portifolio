import React from 'react';
import ProjectCard from '../projects/ProjectCard';
import './ProjectsSection.css';

function ProjectsSection() {
    const projects = [
        { 
            title: 'Portfólio Pessoal', 
            description: 'Site pessoal desenvolvido com React, destacando habilidades e projetos.', 
            tech: 'React, CSS3, JavaScript',
            link: '#'
        },
        { 
            title: 'Sistema de Gestão', 
            description: 'Aplicação web para controle de estoque e vendas.', 
            tech: 'PHP, MySQL, JavaScript',
            link: '#'
        },
        { 
            title: 'API REST', 
            description: 'Backend para aplicação mobile com autenticação JWT.', 
            tech: 'Python, Django, PostgreSQL',
            link: '#'
        },
        { 
            title: 'Dashboard Analytics', 
            description: 'Interface para visualização de dados e métricas.', 
            tech: 'JavaScript, Chart.js, API',
            link: '#'
        },
        { 
            title: 'App Mobile', 
            description: 'Aplicativo para controle de tarefas e projetos.', 
            tech: 'React Native, Firebase',
            link: '#'
        },
        { 
            title: 'E-commerce', 
            description: 'Plataforma completa de vendas online.', 
            tech: 'Node.js, Express, MongoDB',
            link: '#'
        }
    ];

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
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;
