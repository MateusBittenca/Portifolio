import React, { useState } from 'react';
import ProjectCard from '../projects/ProjectCard';
import ProjectModal from '../projects/ProjectModal';
import './ProjectsSection.css';

function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const projects = [
        { 
            title: 'Portfólio Pessoal', 
            description: 'Site pessoal desenvolvido com React, destacando habilidades e projetos com design moderno e responsivo.',
            tech: 'React, CSS3, JavaScript, HTML5',
            image: '/src/assets/img/portfolio-project.jpg',
            features: [
                'Design responsivo e moderno',
                'Seções organizadas para habilidades e projetos',
                'Animações suaves e interativas',
                'Formulário de contato funcional',
                'Otimizado para SEO'
            ],
            challenges: 'Implementar um design atrativo mantendo a performance e acessibilidade, além de criar componentes reutilizáveis para facilitar manutenção futura.',
            github: 'https://github.com/seu-usuario/portfolio',
            demo: 'https://seu-portfolio.vercel.app'
        },
        { 
            title: 'Sistema de Gestão', 
            description: 'Aplicação web completa para controle de estoque, vendas e relatórios empresariais.',
            tech: 'PHP, MySQL, JavaScript, Bootstrap, jQuery',
            image: '/src/assets/img/management-system.jpg',
            features: [
                'Controle de estoque em tempo real',
                'Gestão de vendas e clientes',
                'Relatórios e dashboards',
                'Sistema de usuários e permissões',
                'Backup automático de dados'
            ],
            challenges: 'Desenvolver um sistema robusto que pudesse lidar com múltiplos usuários simultâneos e garantir a integridade dos dados em operações críticas.',
            github: 'https://github.com/seu-usuario/management-system',
            demo: 'https://demo-sistema.vercel.app'
        },
        { 
            title: 'API REST', 
            description: 'Backend robusto para aplicação mobile com autenticação JWT e documentação completa.',
            tech: 'Python, Django, PostgreSQL, JWT, Swagger',
            image: '/src/assets/img/api-rest.jpg',
            features: [
                'Autenticação JWT segura',
                'Documentação automática com Swagger',
                'Validação de dados robusta',
                'Testes automatizados',
                'Deploy com Docker'
            ],
            challenges: 'Implementar um sistema de autenticação seguro e escalável, além de criar uma documentação clara para facilitar o uso da API pelos desenvolvedores.',
            github: 'https://github.com/seu-usuario/api-rest',
            demo: 'https://api-docs.vercel.app'
        },
        { 
            title: 'Dashboard Analytics', 
            description: 'Interface moderna para visualização de dados e métricas com gráficos interativos.',
            tech: 'JavaScript, Chart.js, D3.js, API REST, CSS3',
            image: '/src/assets/img/dashboard.jpg',
            features: [
                'Gráficos interativos e responsivos',
                'Filtros avançados de dados',
                'Exportação de relatórios',
                'Temas claro e escuro',
                'Atualização em tempo real'
            ],
            challenges: 'Criar visualizações de dados que fossem tanto informativas quanto esteticamente agradáveis, garantindo boa performance mesmo com grandes volumes de dados.',
            github: 'https://github.com/seu-usuario/dashboard',
            demo: 'https://dashboard-demo.vercel.app'
        },
        { 
            title: 'App Mobile', 
            description: 'Aplicativo nativo para controle de tarefas e projetos com sincronização em nuvem.',
            tech: 'React Native, Firebase, Redux, AsyncStorage',
            image: '/src/assets/img/mobile-app.jpg',
            features: [
                'Sincronização offline/online',
                'Notificações push',
                'Temas personalizáveis',
                'Backup na nuvem',
                'Multiplataforma (iOS/Android)'
            ],
            challenges: 'Implementar sincronização eficiente entre dispositivos e nuvem, além de garantir boa performance em dispositivos com recursos limitados.',
            github: 'https://github.com/seu-usuario/mobile-app',
            demo: 'https://app-demo.vercel.app'
        },
        { 
            title: 'E-commerce', 
            description: 'Plataforma completa de vendas online com sistema de pagamentos e gestão de pedidos.',
            tech: 'Node.js, Express, MongoDB, Stripe, AWS',
            image: '/src/assets/img/ecommerce.jpg',
            features: [
                'Catálogo de produtos dinâmico',
                'Sistema de pagamentos seguro',
                'Gestão de pedidos e estoque',
                'Painel administrativo',
                'Integração com marketplaces'
            ],
            challenges: 'Desenvolver uma plataforma que fosse segura para transações financeiras e escalável para lidar com picos de tráfego durante promoções.',
            github: 'https://github.com/seu-usuario/ecommerce',
            demo: 'https://ecommerce-demo.vercel.app'
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
