import { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

function TitleUpdater() {
    const { language } = useLanguage();

    useEffect(() => {
        const titles = {
            pt: 'Mateus Bittencourt | Desenvolvedor Full-Stack — React, TypeScript, Node.js',
            en: 'Mateus Bittencourt | Full-Stack Developer — React, TypeScript, Node.js'
        };

        const descriptions = {
            pt: 'Desenvolvedor Full-Stack disponível para projetos freelance. React, TypeScript, Node.js e Python. Código limpo, boa UX e entrega no prazo.',
            en: 'Full-Stack Developer available for freelance projects. React, TypeScript, Node.js and Python. Clean code, great UX, and on-time delivery.'
        };

        document.title = titles[language] || titles.pt;

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', descriptions[language] || descriptions.pt);
        }

        document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
    }, [language]);

    return null;
}

export default TitleUpdater;
