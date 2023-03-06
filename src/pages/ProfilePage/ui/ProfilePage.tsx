import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames, ReducersList, useDynamicReducerLoading } from '@/shared/lib';
import { profileReducer } from '@/entities/Profile';

interface ProfilePageProps {
    className?:string;
}

const initialReducers:ReducersList = {
    profile: profileReducer,
};

const ProfilePage = memo(({ className }:ProfilePageProps) => {
    const { t } = useTranslation('profilePage');

    useDynamicReducerLoading({ reducers: initialReducers, removeAfterUnmount: true });

    return (
        <div className={classNames('', {}, [className])}>
            <h1>{t('profilePageTitle')}</h1>
        </div>
    );
});

export default ProfilePage;
