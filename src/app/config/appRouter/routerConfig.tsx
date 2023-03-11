import { RouteProps } from 'react-router-dom';
import {
    AboutPage, MainPage, NotFoundPage, ProfilePage,
} from '@/pages';

type AppRouteProps = RouteProps & {
    authOnly?:boolean;
}

const enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'notFound',
    PROFILE = 'profile',
}

export const routePaths:Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
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
        path: routePaths[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
    },
];
