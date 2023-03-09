import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import {
    classNames, ReducersList, useAppDispatch, useDynamicReducerLoading,
} from '@/shared/lib';
import { fetchProfileData, ProfileCard, profileReducer } from '@/entities/Profile';

interface ProfilePageProps {
    className?:string;
}

const initialReducers:ReducersList = {
    profile: profileReducer,
};

const ProfilePage = memo(({ className }:ProfilePageProps) => {
    const { t } = useTranslation('profilePage');

    useDynamicReducerLoading({ reducers: initialReducers, removeAfterUnmount: false });

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <div className={classNames('', {}, [className])}>
            <ProfileCard />
        </div>
    );
});

export default ProfilePage;
