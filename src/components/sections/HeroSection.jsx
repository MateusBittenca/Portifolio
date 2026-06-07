import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faFile } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from '../../hooks/useTranslation';
import './HeroSection.css';
import EuImg from '../../assets/img/Eu.jpg';

const STACK_TAGS = ['React', 'TypeScript', 'Node.js', 'Python'];

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
                    <div className="hero__content">
                        <p className="hero__eyebrow">{t('hero.profession')}</p>
                        <h1 className="hero__name">{nome}</h1>
                        <p className="hero__subtitle">{t('hero.subtitle')}</p>

                        <div className="hero__location">
                            <FontAwesomeIcon icon={faMapMarkerAlt} aria-hidden="true" />
                            <span>{t('hero.location')}</span>
                        </div>

                        <p className="hero__description">{t('hero.description')}</p>

                        <div className="hero__proof" aria-label={t('hero.proofLabel')}>
                            <span className="hero__badge">{t('hero.projectsCount')}</span>
                            <span className="hero__badge hero__badge--accent">{t('hero.freelanceAvailable')}</span>
                        </div>

                        <div className="hero__stacks" aria-label={t('hero.stacksLabel')}>
                            {STACK_TAGS.map((tag) => (
                                <span key={tag} className="hero__stack-tag">{tag}</span>
                            ))}
                        </div>

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

                    <div className="hero__photo">
                        <div className="hero__image">
                            <img src={EuImg} alt="Mateus Bittencourt" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
