import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { routePaths } from '@/app/config';
import HomeIcon from '@/shared/assets/icons/home-icon.svg';
import ProfileIcon from '@/shared/assets/icons/profile-icon.svg';
import ArticleIcon from '@/shared/assets/icons/article-icon.svg';
import InfoIcon from '@/shared/assets/icons/book-info-icon.svg';
import { ISidebarItem } from '../../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData):ISidebarItem[] => [
    {
        path: routePaths.main,
        text: 'mainPage',
        Icon: HomeIcon,
    },
    {
        path: `${routePaths.profile}/${userData?.id}`,
        text: 'profilePage',
        Icon: ProfileIcon,
        authOnly: true,
    },
    {
        path: routePaths.articles,
        text: 'articlesPage',
        Icon: ArticleIcon,
        authOnly: true,
    },
    {
        path: routePaths.about,
        text: 'aboutPage',
        Icon: InfoIcon,
    },
].filter((item) => !item.authOnly || (item.authOnly && userData)));
