import { Route, Routes } from 'react-router-dom';
import { memo, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { appRouterConfig } from '@/app/config';
import { PageLoader } from '@/widgets/Loaders/PageLoader/';
import { getUserAuthData } from '@/entities/User';

export const AppRouter = memo(() => {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => {
        if (!isAuth) {
            return appRouterConfig.filter(({ authOnly }) => !authOnly);
        }
        return appRouterConfig;
    }, [isAuth]);

    return (
        <Routes>
            {routes.map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<PageLoader />}>
                            <div className="page-wrapper">{element}</div>
                        </Suspense>
                    )}
                />
            ))}
        </Routes>
    );
});
