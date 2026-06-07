import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';
import SectionHeader from '../common/SectionHeader';
import Icons from '../../layout/Icons.jsx';
import './SkillsSection.css';

function SkillsSection() {
    const { t } = useTranslation();
    const shouldReduceMotion = useReducedMotion();
    const skillsIcons = [
        { icon: 'faHtml5', name: 'HTML5', color: '#E34F26' },
        { icon: 'faCss3', name: 'CSS3', color: '#1572B6' },
        { icon: 'faJs', name: 'JavaScript', color: '#F7DF1E' },
        { icon: 'faTypeScript', name: 'TypeScript', color: '#3178C6' },
        { icon: 'faReact', name: 'React', color: '#61DAFB' },
        { icon: 'faTailwind', name: 'Tailwind CSS', color: '#06B6D4' },
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
                <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <SectionHeader title={t('skills.title')} subtitle={t('skills.subtitle')} />
                </motion.div>

                <div className="skills__icons">
                    <Icons icons={skillsIcons} />
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;
