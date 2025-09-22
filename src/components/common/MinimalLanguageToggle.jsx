import React, { useState, useCallback } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './MinimalLanguageToggle.css';

function MinimalLanguageToggle() {
    const { language, toggleLanguage } = useLanguage();
    const [isAnimating, setIsAnimating] = useState(false);

    const handleToggle = useCallback(() => {
        if (isAnimating) return;
        
        setIsAnimating(true);
        toggleLanguage();
        
        setTimeout(() => setIsAnimating(false), 300);
    }, [isAnimating, toggleLanguage]);

    return (
        <button 
            className={`minimal-language-toggle ${isAnimating ? 'minimal-language-toggle--animating' : ''}`}
            onClick={handleToggle}
            aria-label={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
            title={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
            disabled={isAnimating}
        >
            <span className="minimal-language-toggle__text">
                {language === 'pt' ? 'EN' : 'PT'}
            </span>
        </button>
    );
}

export default MinimalLanguageToggle;
