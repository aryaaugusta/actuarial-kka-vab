import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n, t } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'id' : 'en');
    };

    return (
        <button
            onClick={toggleLanguage}
            className="fixed top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded"
        >
            {t('switchLang')}
        </button>
    );
};

export default LanguageSwitcher;
