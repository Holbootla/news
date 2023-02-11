import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('aboutPage');

    return (
        <h1>{t('aboutPageTitle')}</h1>
    );
};

export default AboutPage;
