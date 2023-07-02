import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib';
import { AppPage } from '@/shared/ui';

interface AboutPageProps {
    className?:string;
}

const AboutPage = memo(({ className }:AboutPageProps) => {
    const { t } = useTranslation('aboutPage');

    return (
        <AppPage className={classNames('', {}, [className])}>
            <h1>{t('aboutPageTitle')}</h1>
        </AppPage>
    );
});

export default AboutPage;
