import React, { useState, useCallback } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './RobustFlagToggle.css';

function RobustFlagToggle() {
    const { language, toggleLanguage } = useLanguage();
    const [isAnimating, setIsAnimating] = useState(false);

    const handleToggle = useCallback(() => {
        if (isAnimating) return;
        
        setIsAnimating(true);
        toggleLanguage();
        
        setTimeout(() => setIsAnimating(false), 300);
    }, [isAnimating, toggleLanguage]);

    // Função para detectar se o navegador suporta emojis
    const supportsEmoji = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        ctx.textBaseline = 'top';
        ctx.font = '32px Arial';
        ctx.fillText('🇧🇷', 0, 0);
        return ctx.getImageData(16, 16, 1, 1).data[0] !== 0;
    };

    const getFlagDisplay = (country) => {
        if (supportsEmoji()) {
            return country === 'br' ? '🇧🇷' : '🇺🇸';
        } else {
            // Fallback para texto se emojis não funcionarem
            return country === 'br' ? 'BR' : 'US';
        }
    };

    return (
        <button 
            className={`robust-flag-toggle ${isAnimating ? 'robust-flag-toggle--animating' : ''}`}
            onClick={handleToggle}
            aria-label={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
            title={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
            disabled={isAnimating}
        >
            <span className={`robust-flag-toggle__flag ${language === 'pt' ? 'active' : ''}`}>
                {getFlagDisplay('br')}
            </span>
            <span className="robust-flag-toggle__separator">|</span>
            <span className={`robust-flag-toggle__flag ${language === 'en' ? 'active' : ''}`}>
                {getFlagDisplay('us')}
            </span>
        </button>
    );
}

export default RobustFlagToggle;

