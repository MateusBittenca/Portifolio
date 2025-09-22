import { useLanguage } from '../contexts/LanguageContext';
import ptTranslations from '../translations/pt.json';
import enTranslations from '../translations/en.json';

const translations = {
    pt: ptTranslations,
    en: enTranslations
};

export function useTranslation() {
    const { language } = useLanguage();

    const t = (key) => {
        const keys = key.split('.');
        let value = translations[language];
        
        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                return key; // Retorna a chave se não encontrar a tradução
            }
        }
        
        return value || key;
    };

    return { t };
}
