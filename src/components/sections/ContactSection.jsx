import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from '../../hooks/useTranslation';
import './ContactSection.css';

function ContactSection() {
    const { t } = useTranslation();
    const telefone = "12 99112-5282";
    const email = "mpbittenc@gmail.com";

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-header">
                    <h2>{t('contact.title')}</h2>
                    <p>{t('contact.subtitle')}</p>
                </div>
                
                <div className="contact__content">
                    <div className="contact__text">
                        <h3>{t('contact.callToAction')}</h3>
                        <p>{t('contact.description')}</p>
                    </div>
                    
                    <div className="contact__info">
                        <div className="contact-item">
                            <div className="contact-icon">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div className="contact-details">
                                <p className="contact-value">{email}</p>
                                <p className="contact-label">{t('contact.email')}</p>
                            </div>
                        </div>
                        
                        <div className="contact-item">
                            <div className="contact-icon">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <div className="contact-details">
                                <p className="contact-value">{telefone}</p>
                                <p className="contact-label">{t('contact.phone')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
