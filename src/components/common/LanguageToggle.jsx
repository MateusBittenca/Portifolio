import React, { useState, useCallback } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './LanguageToggle.css';

function LanguageToggle({ 
    variant = 'default', // 'default' | 'compact' | 'minimal'
    showIndicator = true,
    className = '',
    ...props 
}) {
    const { language, toggleLanguage } = useLanguage();
    const [isAnimating, setIsAnimating] = useState(false);

    const handleToggle = useCallback(() => {
        if (isAnimating) return; // Previne cliques múltiplos durante animação
        
        setIsAnimating(true);
        toggleLanguage();
        
        // Remove a classe de animação após o término
        setTimeout(() => setIsAnimating(false), 400);
    }, [isAnimating, toggleLanguage]);

    const getButtonData = useCallback(() => ({
        pt: { 
            flag: '🇺🇸', 
            text: 'English', 
            title: 'Switch to English',
            currentFlag: '🇧🇷'
        },
        en: { 
            flag: '🇧🇷', 
            text: 'Português', 
            title: 'Mudar para Português',
            currentFlag: '🇺🇸'
        }
    }), []);

    const buttonData = getButtonData()[language];

    const getVariantClass = () => {
        switch (variant) {
            case 'compact':
                return 'language-toggle--compact';
            case 'minimal':
                return 'language-toggle--minimal';
            default:
                return '';
        }
    };

    const buttonClasses = [
        'language-toggle',
        getVariantClass(),
        isAnimating ? 'language-toggle--animating' : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <button 
            className={buttonClasses}
            onClick={handleToggle}
            aria-label={buttonData.title}
            title={buttonData.title}
            disabled={isAnimating}
            {...props}
        >
            <span className="language-toggle__flag">
                {buttonData.flag}
            </span>
            
            {/* Mostrar apenas as bandeiras como indicação visual */}
            {showIndicator && (
                <span className="language-toggle__indicator" aria-hidden="true">
                    {buttonData.currentFlag}
                </span>
            )}
        </button>
    );
}

export default LanguageToggle;
