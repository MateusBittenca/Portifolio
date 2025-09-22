import React, { useState, useCallback } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './FlagToggle.css';

function FlagToggle() {
    const { language, toggleLanguage } = useLanguage();
    const [isAnimating, setIsAnimating] = useState(false);

    const handleToggle = useCallback(() => {
        if (isAnimating) return;
        
        setIsAnimating(true);
        toggleLanguage();
        
        setTimeout(() => setIsAnimating(false), 400);
    }, [isAnimating, toggleLanguage]);

    return (
        <button 
            className={`flag-toggle ${isAnimating ? 'flag-toggle--animating' : ''}`}
            onClick={handleToggle}
            aria-label={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
            title={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
            disabled={isAnimating}
        >
            {/* Bandeira do Brasil */}
            <span className={`flag-toggle__flag flag-toggle__flag--br ${language === 'pt' ? 'flag-toggle__flag--active' : ''}`}>
                🇧🇷
            </span>
            
            {/* Separador */}
            <span className="flag-toggle__separator">|</span>
            
            {/* Bandeira dos EUA */}
            <span className={`flag-toggle__flag flag-toggle__flag--us ${language === 'en' ? 'flag-toggle__flag--active' : ''}`}>
                🇺🇸
            </span>
        </button>
    );
}

export default FlagToggle;
