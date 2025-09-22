import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        // Verifica se há uma preferência salva no localStorage
        const savedLanguage = localStorage.getItem('portfolio-language');
        return savedLanguage || 'pt';
    });

    useEffect(() => {
        // Salva a preferência no localStorage quando muda o idioma
        localStorage.setItem('portfolio-language', language);
        
        // Atualiza o atributo lang do documento
        document.documentElement.lang = language;
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
    };

    const value = {
        language,
        setLanguage,
        toggleLanguage,
        isEnglish: language === 'en',
        isPortuguese: language === 'pt'
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage deve ser usado dentro de um LanguageProvider');
    }
    return context;
}
