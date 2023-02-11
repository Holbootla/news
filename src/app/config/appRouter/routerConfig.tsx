import { RouteProps } from 'react-router-dom';
import { AboutPage, MainPage } from '@/pages';

const AppRoutes = {
    MAIN: 'main',
    ABOUT: 'about',
};

const routePaths:Record<string, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
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
];
