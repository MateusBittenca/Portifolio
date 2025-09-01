import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faFile } from "@fortawesome/free-solid-svg-icons";
import './HeroSection.css';
import EuImg from '../../assets/img/Eu.jpg';
import curriculo from '../../pdf/Currículo.pdf';

function HeroSection() {
    const nome = "Mateus Bittencourt";
    const profissao = "FULLSTACK DEVELOPER";
    const cidade = "São José dos Campos, SP";
    const descricao = "Sou um programador apaixonado por tecnologia, em busca da minha primeira experiência profissional. Tenho muita vontade de aprender, crescer e contribuir para projetos que façam a diferença. Dedico-me ao estudo constante de programação e desenvolvimento de soluções práticas e criativas.";

    return (
        <section id="about" className="hero">
            <div className="container">
                <div className="hero__content">
                    <div className="hero__profile">
                        <div className="hero__image">
                            <img src={EuImg} alt="Mateus Bittencourt" />
                        </div>
                        
                        <h1 className="hero__name">{nome}</h1>
                        <p className="hero__title">{profissao}</p>
                        
                        <div className="hero__location">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            <span>{cidade}</span>
                        </div>
                        
                        <p className="hero__description">{descricao}</p>
                        
                        <div className="hero__social">
                            <a href="https://github.com/MateusBittenca" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://www.linkedin.com/in/mateus-ribeiro-leite-paes-bittencourt-60730a294" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href={curriculo} className="social-link" download="Currículo.pdf" aria-label="Currículo">
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
