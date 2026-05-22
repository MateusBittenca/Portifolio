import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faFile } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from '../../hooks/useTranslation';
import './HeroSection.css';
import EuImg from '../../assets/img/Eu.jpg';

function HeroSection() {
    const { t } = useTranslation();
    const nome = "Mateus Bittencourt";

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="about" className="hero">
            <div className="container">
                <div className="hero__layout">
                    <div className="hero__photo">
                        <div className="hero__image">
                            <img src={EuImg} alt="Mateus Bittencourt" />
                        </div>
                    </div>

                    <div className="hero__info">
                        <h1 className="hero__name">{nome}</h1>
                        <p className="hero__title">{t('hero.profession')}</p>

                        <div className="hero__location">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            <span>{t('hero.location')}</span>
                        </div>

                        <p className="hero__description">{t('hero.description')}</p>

                        <div className="hero__actions">
                            <button
                                type="button"
                                className="hero__cta hero__cta--primary"
                                onClick={() => scrollToSection('projects')}
                            >
                                {t('navigation.projects')}
                            </button>
                            <button
                                type="button"
                                className="hero__cta hero__cta--secondary"
                                onClick={() => scrollToSection('contact')}
                            >
                                {t('navigation.contact')}
                            </button>
                        </div>

                        <div className="hero__social">
                            <a href="https://github.com/MateusBittenca" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://www.linkedin.com/in/mateus-ribeiro-leite-paes-bittencourt-60730a294" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="/assets/pdf/Currículo.pdf" className="social-link" download="Currículo.pdf" aria-label="Currículo">
                                <FontAwesomeIcon icon={faFile} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
