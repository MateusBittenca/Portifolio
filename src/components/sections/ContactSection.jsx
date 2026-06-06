import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from '../../hooks/useTranslation';
import SectionHeader from '../common/SectionHeader';
import './ContactSection.css';

function ContactSection() {
    const { t } = useTranslation();
    const email = "mpbittenc@gmail.com";
    const upworkUrl = "#";
    const linkedinUrl = "https://www.linkedin.com/in/mateus-ribeiro-leite-paes-bittencourt-60730a294";

    return (
        <section id="contact" className="contact">
            <div className="container">
                <SectionHeader title={t('contact.title')} subtitle={t('contact.subtitle')} />
                
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
                                <a href={`mailto:${email}`} className="contact-value">{email}</a>
                                <p className="contact-label">{t('contact.email')}</p>
                            </div>
                        </div>

                        <div className="contact__links">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                                href={upworkUrl}
                                className="contact-link contact-link--primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t('contact.hireOnUpwork')}
                            </a>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                                href={linkedinUrl}
                                className="contact-link contact-link--secondary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                                {t('contact.viewLinkedIn')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
