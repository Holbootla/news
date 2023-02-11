import { RouteProps } from 'react-router-dom';
import { AboutPage, MainPage, NotFoundPage } from '@/pages';

const AppRoutes = {
    MAIN: 'main',
    ABOUT: 'about',
    NOT_FOUND: 'notFound',
};

const routePaths:Record<string, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',

};

export const appRouterConfig:RouteProps[] = [
    {
        path: routePaths[AppRoutes.MAIN],
        element: <MainPage />,
    },
    {
        path: routePaths[AppRoutes.ABOUT],
        element: <AboutPage />,
    },
    {
        path: routePaths[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
    },
];
