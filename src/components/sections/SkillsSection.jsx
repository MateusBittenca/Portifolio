import React from 'react';
import Icons from '../../layout/Icons';
import './SkillsSection.css';

function SkillsSection() {
    const skillsIcons = [
        { icon: 'faHtml5', name: 'HTML5', color: '#E34F26' },
        { icon: 'faCss3', name: 'CSS3', color: '#1572B6' },
        { icon: 'faJs', name: 'JavaScript', color: '#F7DF1E' },
        { icon: 'faReact', name: 'React', color: '#61DAFB' },
        { icon: 'faPhp', name: 'PHP', color: '#777BB4' },
        { icon: 'faPython', name: 'Python', color: '#3776AB' },
        { icon: 'faGitAlt', name: 'Git', color: '#F05032' },
        { icon: 'faNodeJs', name: 'Node.js', color: '#339933' },
        { icon: 'faMysql', name: 'MySQL', color: '#4479A1' },
        { icon: 'faDocker', name: 'Docker', color: '#2496ED' },
        { icon: 'faJava', name: 'Java', color: '#007396' } 
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <div className="section-header">
                    <h2>Habilidades</h2>
                    <p>Tecnologias e ferramentas que utilizo no desenvolvimento</p>
                </div>
                
                <div className="skills__icons">
                    <Icons icons={skillsIcons} />
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;
