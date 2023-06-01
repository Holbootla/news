import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import {
    classNames, ReducersList, useAppDispatch, useDynamicReducerLoading,
} from '@/shared/lib';
import classes from './ProfileCard.module.scss';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileFormData } from '../../model/selectors/getProfileFormData/getProfileFormData';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { AppButton, AppInput } from '@/shared/ui';
import { PageLoader } from '@/widgets/Loaders/PageLoader';
import { AppText, AppTextVariants } from '@/shared/ui/AppText/AppText';
import { AppAvatar } from '@/shared/ui/AppAvatar/AppAvatar';
import DefaultAvatar from '@/shared/assets/images/default-avatar.jpg';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Country, CountrySelect } from '@/entities/Country';
import {
    getProfileValidateErrors,
} from '@/entities/Profile/model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { getUserAuthData } from '@/entities/User';

interface ProfileCardProps {
    className?:string;
}

const initialReducers:ReducersList = {
    profile: profileReducer,
};

export const ProfileCard = memo(({ className }:ProfileCardProps) => {
    const { t } = useTranslation('profilePage');

    const dispatch = useAppDispatch();

    const { id } = useParams();

    useDynamicReducerLoading({ reducers: initialReducers, removeAfterUnmount: true });

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const data = useSelector(getProfileData);
    const formData = useSelector(getProfileFormData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const validateErrors = useSelector(getProfileValidateErrors);
    const readonly = useSelector(getProfileReadonly);
    const authData = useSelector(getUserAuthData);

    const canEdit = id === authData?.id;

    const profileData = useMemo(() => (readonly ? data : formData), [data, formData, readonly]);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancel = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData(id));
    }, [dispatch, id]);

    const onChangeUsername = useCallback((value:string) => {
        dispatch(profileActions.setFormData({ username: value ?? '' }));
    }, [dispatch]);

    const onChangeFirstName = useCallback((value:string) => {
        dispatch(profileActions.setFormData({ firstName: value ?? '' }));
    }, [dispatch]);

    const onChangeLastName = useCallback((value:string) => {
        dispatch(profileActions.setFormData({ lastName: value ?? '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value:string) => {
        dispatch(profileActions.setFormData({ age: parseInt(value, 10) || 0 }));
    }, [dispatch]);

    const onChangeCountry = useCallback((value:Country) => {
        dispatch(profileActions.setFormData({ country: value ?? '' }));
    }, [dispatch]);

    const onChangeCity = useCallback((value:string) => {
        dispatch(profileActions.setFormData({ city: value ?? '' }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((value:Currency) => {
        dispatch(profileActions.setFormData({ currency: value }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value:string) => {
        dispatch(profileActions.setFormData({ avatar: value ?? '' }));
    }, [dispatch]);

    if (isLoading) {
        return (
            <PageLoader />
        );
    }

    if (error) {
        return (
            <AppText title={t('profileError')} text={t(error)} variant={AppTextVariants.CRITICAL} />
        );
    }

    return (
        <div
            data-testid="ProfileCard"
            className={classNames(classes.ProfileCard, {}, [className])}
        >
            <div className={classes.header}>
                <h1>{t('profile')}</h1>
                {canEdit && (
                    <div className={classes['header-buttons']}>
                        {readonly && <AppButton onClick={onEdit}>{t('edit')}</AppButton>}
                        {!readonly && (
                            <>
                                <AppButton onClick={onCancel}>{t('cancel')}</AppButton>
                                <AppButton onClick={onSave}>{t('save')}</AppButton>
                            </>
                        )}
                    </div>
                )}
            </div>
            {validateErrors && (
                validateErrors.map((err) => (
                    <AppText key={err} text={t(err)} variant={AppTextVariants.CRITICAL} />
                ))
            )}
            <AppAvatar source={profileData?.avatar || DefaultAvatar} className={classes.avatar} />
            <div className={classes.data}>
                <AppInput
                    value={profileData?.username ?? ''}
                    label={t('username')}
                    disabled={readonly}
                    onChange={onChangeUsername}
                />
                <AppInput
                    value={profileData?.firstName ?? ''}
                    label={t('firstName')}
                    disabled={readonly}
                    onChange={onChangeFirstName}
                />
                <AppInput
                    value={profileData?.lastName ?? ''}
                    label={t('lastName')}
                    disabled={readonly}
                    onChange={onChangeLastName}
                />
                <AppInput
                    value={profileData?.age?.toString() ?? ''}
                    label={t('age')}
                    disabled={readonly}
                    onChange={onChangeAge}
                />
                <CountrySelect
                    value={profileData?.country}
                    readonly={readonly}
                    onChange={onChangeCountry}
                />
                <AppInput
                    value={profileData?.city ?? ''}
                    label={t('city')}
                    disabled={readonly}
                    onChange={onChangeCity}
                />
                <CurrencySelect
                    value={profileData?.currency}
                    readonly={readonly}
                    onChange={onChangeCurrency}
                />
                <AppInput
                    value={profileData?.avatar ?? ''}
                    label={t('avatar')}
                    disabled={readonly}
                    onChange={onChangeAvatar}
                />
            </div>
        </div>
    );
});
