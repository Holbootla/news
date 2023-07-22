import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib';
import { Page } from '@/widgets/Page';

interface MainPageProps {
    className?:string;
}

const MainPage = memo(({ className }:MainPageProps) => {
    const { t } = useTranslation('mainPage');

    return (
        <Page className={classNames('', {}, [className])}>
            <h1>{t('mainPageTitle')}</h1>
        </Page>
    );
});

export default MainPage;
