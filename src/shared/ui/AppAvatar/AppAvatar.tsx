import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib';
import classes from './AppAvatar.module.scss';
import { ModClasses } from '@/shared/lib/classNames/classNames';

export enum AppAvatarSizes {
    XS = 'extra-small',
    S = 'small',
    M = 'medium',
    L = 'large',
}

interface AppAvatarProps {
    className?:string;
    source:string;
    size?:AppAvatarSizes;
}

export const AppAvatar = ({ className, source, size = AppAvatarSizes.M }:AppAvatarProps) => {
    const { t } = useTranslation();

    const mods:ModClasses = {
        [classes[AppAvatarSizes.XS]]: size === AppAvatarSizes.XS,
        [classes[AppAvatarSizes.S]]: size === AppAvatarSizes.S,
        [classes[AppAvatarSizes.M]]: size === AppAvatarSizes.M,
        [classes[AppAvatarSizes.L]]: size === AppAvatarSizes.L,
    };

    return (
        <img
            data-testid="AppAvatar"
            className={classNames(classes.AppAvatar, mods, [className])}
            src={source}
            alt={t('userAvatar')}
        />
    );
};
