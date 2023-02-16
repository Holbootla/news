import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { classNames } from '@/shared/lib';

interface AboutPageProps {
    className?:string;
}

const AboutPage:FC<AboutPageProps> = ({ className }) => {
    const { t } = useTranslation('aboutPage');

    return (
        <div className={classNames('', {}, [className])}>
            <h1>{t('aboutPageTitle')}</h1>
        </div>
    );
};

export default AboutPage;
