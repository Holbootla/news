import { RouteProps } from "react-router-dom";
import { AboutPage, MainPage } from "@/pages";

enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

const routePaths:Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
};

export const appRouterConfig:RouteProps[] = [
    {
        path: routePaths[AppRoutes.MAIN],
        element: <MainPage />
    },
    {
        path: routePaths[AppRoutes.ABOUT],
        element: <AboutPage />
    },
];