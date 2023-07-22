import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib';
import { Page } from '@/widgets/Page';

interface AboutPageProps {
    className?:string;
}

const AboutPage = memo(({ className }:AboutPageProps) => {
    const { t } = useTranslation('aboutPage');

    return (
        <Page className={classNames('', {}, [className])}>
            <h1>{t('aboutPageTitle')}</h1>
        </Page>
    );
});

export default AboutPage;
