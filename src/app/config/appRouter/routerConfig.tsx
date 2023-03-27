import { RouteProps } from 'react-router-dom';
import {
    AboutPage, ArticleDetailsPage, ArticlesPage, MainPage, NotFoundPage, ProfilePage,
} from '@/pages';

export type AppRouteProps = RouteProps & {
    authOnly?:boolean;
}

const enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'notFound',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
}

export const routePaths:Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles/:id',
    [AppRoutes.NOT_FOUND]: '*',
};

export const appRouterConfig:AppRouteProps[] = [
    {
        path: routePaths[AppRoutes.MAIN],
        element: <MainPage />,
    },
    {
        path: routePaths[AppRoutes.ABOUT],
        element: <AboutPage />,
    },
    {
        path: routePaths[AppRoutes.PROFILE],
        element: <ProfilePage />,
        authOnly: true,
    },
    {
        path: routePaths[AppRoutes.ARTICLES],
        element: <ArticlesPage />,
        authOnly: true,
    },
    {
        path: `${routePaths[AppRoutes.ARTICLE_DETAILS]}`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    {
        path: routePaths[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
    },
];
