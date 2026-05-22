import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './FlagToggle.css';

function FlagToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flag-toggle" role="group" aria-label="Selecionar idioma">
            <button
                type="button"
                className={`flag-toggle__flag ${language === 'pt' ? 'flag-toggle__flag--active' : ''}`}
                onClick={() => setLanguage('pt')}
                aria-label="Português (Brasil)"
                aria-pressed={language === 'pt'}
                title="Português"
            >
                🇧🇷
            </button>

            <button
                type="button"
                className={`flag-toggle__flag ${language === 'en' ? 'flag-toggle__flag--active' : ''}`}
                onClick={() => setLanguage('en')}
                aria-label="English (United States)"
                aria-pressed={language === 'en'}
                title="English"
            >
                🇺🇸
            </button>
        </div>
    );
}

export default FlagToggle;
