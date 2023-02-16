import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { classNames } from '@/shared/lib';

interface MainPageProps {
    className?:string;
}

const MainPage:FC<MainPageProps> = ({ className }) => {
    const { t } = useTranslation('mainPage');

    return (
        <div className={classNames('', {}, [className])}>
            <h1>{t('mainPageTitle')}</h1>
        </div>
    );
};

export default MainPage;
