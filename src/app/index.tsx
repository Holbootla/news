import './styles/index.scss';
import { Suspense, useEffect } from 'react';
import { useTheme } from '@/shared/ThemeProvider';
import { classNames, useAppDispatch } from '@/shared/lib';
import { AppRouter } from '@/app/providers/RouterProvider';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { ErrorInvoker } from '@/features/ErrorInvoker';
import { userActions } from '@/entities/User';

export const App = () => {
    const { theme } = useTheme();

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <Suspense fallback="loading">
            <div className={classNames('App', {}, [theme])}>
                <Navbar />
                <div className="app-content-container">
                    <Sidebar />
                    <AppRouter />
                    <ErrorInvoker className="error-invoker" />
                </div>
            </div>
        </Suspense>
    );
};
