import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './FlagToggle.css';

function FlagToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <div
            className="lang-toggle"
            role="group"
            aria-label="Selecionar idioma"
            data-active={language}
        >
            <span className="lang-toggle__indicator" aria-hidden="true" />
            <button
                type="button"
                className={`lang-toggle__option ${language === 'pt' ? 'lang-toggle__option--active' : ''}`}
                onClick={() => setLanguage('pt')}
                aria-label="Português (Brasil)"
                aria-pressed={language === 'pt'}
                title="Português"
            >
                <span className="lang-toggle__flag" aria-hidden="true">🇧🇷</span>
            </button>
            <button
                type="button"
                className={`lang-toggle__option ${language === 'en' ? 'lang-toggle__option--active' : ''}`}
                onClick={() => setLanguage('en')}
                aria-label="English (United States)"
                aria-pressed={language === 'en'}
                title="English"
            >
                <span className="lang-toggle__flag" aria-hidden="true">🇺🇸</span>
            </button>
        </div>
    );
}

export default FlagToggle;
