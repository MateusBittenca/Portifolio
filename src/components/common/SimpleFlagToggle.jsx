import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './SimpleFlagToggle.css';

function SimpleFlagToggle() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button 
            className="simple-flag-toggle"
            onClick={toggleLanguage}
            aria-label={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
            title={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
        >
            <span className="simple-flag-toggle__flag">
                {language === 'pt' ? '🇧🇷' : '🇺🇸'}
            </span>
        </button>
    );
}

export default SimpleFlagToggle;
