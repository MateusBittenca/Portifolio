import { useTranslation } from '../hooks/useTranslation';
import "./Footer.css";

function Footer() {
    const { t } = useTranslation();
    
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; 2025 Mateus Bittencourt. {t('footer.copyright')}</p> 
            </div>
        </footer>
    );
}

export default Footer;