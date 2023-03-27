import { FC, SVGProps } from 'react';
import { routePaths } from '@/app/config';
import HomeIcon from '@/shared/assets/icons/home-icon.svg';
import ProfileIcon from '@/shared/assets/icons/profile-icon.svg';
import ArticleIcon from '@/shared/assets/icons/article-icon.svg';
import InfoIcon from '@/shared/assets/icons/book-info-icon.svg';

export interface ISidebarItem {
    path:string;
    text?:string;
    Icon?:FC<SVGProps<SVGSVGElement>>;
    authOnly?:boolean;
}

export const SidebarItemList:ISidebarItem[] = [
    {
        path: routePaths.main,
        text: 'mainPage',
        Icon: HomeIcon,
    },
    {
        path: routePaths.profile,
        text: 'profilePage',
        Icon: ProfileIcon,
        authOnly: true,
    },
    {
        path: routePaths.articles,
        text: 'articles',
        Icon: ArticleIcon,
        authOnly: true,
    },
    {
        path: routePaths.about,
        text: 'aboutPage',
        Icon: InfoIcon,
    },
];
