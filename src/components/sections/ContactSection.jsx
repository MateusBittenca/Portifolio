import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import './ContactSection.css';

function ContactSection() {
    const telefone = "12 99112-5282";
    const email = "mpbittenc@gmail.com";

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-header">
                    <h2>Contato</h2>
                    <p>Vamos trabalhar juntos! Entre em contato comigo</p>
                </div>
                
                <div className="contact__content">
                    <div className="contact__text">
                        <h3>Vamos conversar!</h3>
                        <p>Estou sempre aberto a novas oportunidades e colaborações. Se você tem um projeto em mente ou gostaria de discutir possibilidades, não hesite em entrar em contato.</p>
                    </div>
                    
                    <div className="contact__info">
                        <div className="contact-item">
                            <div className="contact-icon">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div className="contact-details">
                                <p className="contact-value">{email}</p>
                                <p className="contact-label">Email</p>
                            </div>
                        </div>
                        
                        <div className="contact-item">
                            <div className="contact-icon">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <div className="contact-details">
                                <p className="contact-value">{telefone}</p>
                                <p className="contact-label">Telefone</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
