import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faFile } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from '../../hooks/useTranslation';
import './HeroSection.css';
import EuImg from '../../assets/img/Eu.jpg';
// Currículo agora está em public/assets/pdf/

function HeroSection() {
    const { t } = useTranslation();
    const nome = "Mateus Bittencourt";

    return (
        <section id="about" className="hero">
            <div className="container">
                <div className="hero__content">
                    <div className="hero__profile">
                        <div className="hero__image">
                            <img src={EuImg} alt="Mateus Bittencourt" />
                        </div>
                        
                        <h1 className="hero__name">{nome}</h1>
                        <p className="hero__title">{t('hero.profession')}</p>
                        
                        <div className="hero__location">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            <span>{t('hero.location')}</span>
                        </div>
                        
                        <p className="hero__description">{t('hero.description')}</p>
                        
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
