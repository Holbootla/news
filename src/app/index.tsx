import './styles/index.scss';
import { Suspense } from 'react';
import { useTheme } from '@/shared/ThemeProvider';
import { classNames } from '@/shared/lib';
import { AppRouter } from '@/shared/AppRouter';
import { Navbar } from '@/widgets/Navbar';
import { MainSidebar } from '@/widgets/sidebar/MainSidebar';
import { ErrorInvoker } from '@/features/ErrorInvoker';

export const App = () => {
    const { theme } = useTheme();

    return (
        <Suspense fallback="loading">
            <div className={classNames('App', {}, [theme])}>
                <Navbar />
                <div className="app-content-container">
                    <MainSidebar />
                    <AppRouter />
                    <ErrorInvoker className="error-invoker" />
                </div>
            </div>
        </Suspense>
    );
};
