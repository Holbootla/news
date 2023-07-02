import { Route, Routes } from 'react-router-dom';
import { memo, Suspense, useMemo } from 'react';
import { appRouterConfig } from '@/app/config';
import { PageLoader } from '@/widgets/Loaders/PageLoader';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = memo(() => {
    const routes = useMemo(() => appRouterConfig.map(({ path, element, authOnly }) => {
        const resultElement = (
            <Suspense fallback={<PageLoader />}>
                {element}
            </Suspense>
        );
        return (
            <Route
                key={path}
                path={path}
                element={
                    authOnly
                        ? (
                            <PrivateRoute>
                                {resultElement}
                            </PrivateRoute>
                        )
                        : resultElement
                }
            />
        );
    }), []);

    return (
        <Routes>
            {routes}
        </Routes>
    );
});
