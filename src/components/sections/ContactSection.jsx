import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from '../../hooks/useTranslation';
import SectionHeader from '../common/SectionHeader';
import './ContactSection.css';

function ContactSection() {
    const { t } = useTranslation();
    const email = "mpbittenc@gmail.com";
    const linkedinUrl = "https://www.linkedin.com/in/mateus-ribeiro-leite-paes-bittencourt-60730a294";
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            window.location.href = `mailto:${email}`;
        }
    };

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

                        <div className="contact__actions">
                            <button
                                type="button"
                                className="contact-btn contact-btn--primary"
                                onClick={handleCopyEmail}
                                aria-live="polite"
                            >
                                <FontAwesomeIcon icon={copied ? faCheck : faCopy} aria-hidden="true" />
                                {copied ? t('contact.copySuccess') : t('contact.copyEmail')}
                            </button>
                            <a
                                href={linkedinUrl}
                                className="contact-btn contact-btn--secondary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
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
