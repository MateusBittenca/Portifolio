import { useTranslation } from '../hooks/useTranslation';
import "./Footer.css";

function Footer() {
    const { t } = useTranslation();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="container footer__inner">
                <p className="footer__copyright">
                    &copy; 2025 Mateus Bittencourt. {t('footer.copyright')}
                </p>
                <button
                    type="button"
                    className="footer__back-to-top"
                    onClick={scrollToTop}
                >
                    {t('footer.backToTop')} ↑
                </button>
            </div>
        </footer>
    );
}

export default Footer;
