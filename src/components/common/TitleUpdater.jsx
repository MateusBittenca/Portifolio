import { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

function TitleUpdater() {
    const { language } = useLanguage();

    useEffect(() => {
        const titles = {
            pt: 'Mateus Bittencourt - Portfólio | Desenvolvedor Fullstack',
            en: 'Mateus Bittencourt - Portfolio | Fullstack Developer'
        };
        
        document.title = titles[language] || titles.pt;
    }, [language]);

    return null; // Este componente não renderiza nada
}

export default TitleUpdater;
