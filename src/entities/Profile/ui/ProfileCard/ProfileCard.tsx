import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib';
import classes from './ProfileCard.module.scss';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { AppButton, AppInput } from '@/shared/ui';

interface ProfileCardProps {
    className?:string;
}

export const ProfileCard = ({ className }:ProfileCardProps) => {
    const { t } = useTranslation('profilePage');

    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div
            data-testid="ProfileCard"
            className={classNames(classes.ProfileCard, {}, [className])}
        >
            <div className={classes.header}>
                <h1>{t('profile')}</h1>
                <AppButton>{t('edit')}</AppButton>
            </div>
            <div className={classes.data}>
                <AppInput
                    value={data?.username ?? ''}
                    placeholder={t('username')}
                />
                <AppInput
                    value={data?.firstName ?? ''}
                    placeholder={t('firstName')}
                />
                <AppInput
                    value={data?.lastName ?? ''}
                    placeholder={t('lastName')}
                />
                <AppInput
                    value={data?.age?.toString() ?? ''}
                    placeholder={t('age')}
                />
                <AppInput
                    value={data?.country ?? ''}
                    placeholder={t('country')}
                />
                <AppInput
                    value={data?.city ?? ''}
                    placeholder={t('city')}
                />
                <AppInput
                    value={data?.currency ?? ''}
                    placeholder={t('currency')}
                />
                <AppInput
                    value={data?.avatar ?? ''}
                    placeholder={t('avatar')}
                />
            </div>
        </div>
    );
};
