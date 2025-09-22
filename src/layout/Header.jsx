import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import FlagToggle from '../components/common/FlagToggle';
import "./Header.css";

function Header() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <span className="header__logo-text">MB</span>
          </div>
          
          <div className="header__actions">
            <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
              <ul className="header__nav-list">
                <li><button onClick={() => scrollToSection('about')}>{t('navigation.about')}</button></li>
                <li><button onClick={() => scrollToSection('skills')}>{t('navigation.skills')}</button></li>
                <li><button onClick={() => scrollToSection('projects')}>{t('navigation.projects')}</button></li>
                <li><button onClick={() => scrollToSection('contact')}>{t('navigation.contact')}</button></li>
              </ul>
            </nav>

            <FlagToggle />

            <button 
              className={`header__mobile-toggle ${isMobileMenuOpen ? 'header__mobile-toggle--open' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;