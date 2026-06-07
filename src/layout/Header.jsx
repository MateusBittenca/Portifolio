import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import FlagToggle from '../components/common/FlagToggle';
import "./Header.css";

const SECTIONS = ['about', 'skills', 'projects', 'contact'];

function Header() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observers = [];

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: t('navigation.about') },
    { id: 'skills', label: t('navigation.skills') },
    { id: 'projects', label: t('navigation.projects') },
    { id: 'contact', label: t('navigation.contact') },
  ];

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container">
        <div className="header__content">
          <button
            type="button"
            className="header__logo"
            onClick={() => scrollToSection('about')}
            aria-label={t('navigation.about')}
          >
            <span className="header__logo-text">MB</span>
          </button>

          <div className="header__actions">
            <nav
              className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}
              aria-label="Navegação principal"
            >
              <ul className="header__nav-list">
                {navItems.map(({ id, label }) => (
                  <li key={id}>
                    <button
                      type="button"
                      className={`header__nav-link ${activeSection === id ? 'header__nav-link--active' : ''}`}
                      onClick={() => scrollToSection(id)}
                      aria-current={activeSection === id ? 'true' : undefined}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="header__nav-lang">
                <FlagToggle />
              </div>
            </nav>

            <button
              type="button"
              className={`header__mobile-toggle ${isMobileMenuOpen ? 'header__mobile-toggle--open' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
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
