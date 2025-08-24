import React from 'react';
import HeroSection from '../sections/HeroSection';
import SkillsSection from '../sections/SkillsSection';
import ProjectsSection from '../sections/ProjectsSection';
import ContactSection from '../sections/ContactSection';

function Home() {
    return (
        <div className="portfolio">
            <HeroSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </div>
    );
}

export default Home;