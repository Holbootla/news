import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib';
import { AppPage } from '@/shared/ui';

interface MainPageProps {
    className?:string;
}

const MainPage = memo(({ className }:MainPageProps) => {
    const { t } = useTranslation('mainPage');

    return (
        <AppPage className={classNames('', {}, [className])}>
            <h1>{t('mainPageTitle')}</h1>
        </AppPage>
    );
});

export default MainPage;
