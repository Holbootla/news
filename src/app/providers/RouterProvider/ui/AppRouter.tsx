import { Route, Routes } from 'react-router-dom';
import { memo, Suspense, useMemo } from 'react';
import { appRouterConfig } from '@/app/config';
import { PageLoader } from '@/widgets/Loaders/PageLoader';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = memo(() => {
    const routes = useMemo(() => appRouterConfig.map(({ path, element, authOnly }) => (
        <Route
            key={path}
            path={path}
            element={(
                <Suspense fallback={<PageLoader />}>
                    {authOnly && (
                        <PrivateRoute>
                            <div className="page-wrapper">{element}</div>
                        </PrivateRoute>
                    )}
                    {!authOnly && (
                        <div className="page-wrapper">{element}</div>
                    )}
                </Suspense>
            )}
        />
    )), []);

    return (
        <Routes>
            {routes}
        </Routes>
    );
});
