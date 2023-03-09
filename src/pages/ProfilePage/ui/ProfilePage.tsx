import { memo, useEffect } from 'react';
import {
    ReducersList, useAppDispatch, useDynamicReducerLoading,
} from '@/shared/lib';
import { fetchProfileData, ProfileCard, profileReducer } from '@/entities/Profile';

const initialReducers:ReducersList = {
    profile: profileReducer,
};

const ProfilePage = memo(() => {
    useDynamicReducerLoading({ reducers: initialReducers, removeAfterUnmount: false });

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <div>
            <ProfileCard />
        </div>
    );
});

export default ProfilePage;
