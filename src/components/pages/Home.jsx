import React from 'react';
import HeroSection from '../../components/sections/HeroSection';
import SkillsSection from '../../components/sections/SkillsSection';
import ProjectsSection from '../../components/sections/ProjectsSection';
import ContactSection from '../../components/sections/ContactSection';

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