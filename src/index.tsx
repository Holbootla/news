import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/shared/ThemeProvider';
import { App } from '@/app';
import '@/shared/Language/config/i18n';
import { ErrorBoundary } from '@/shared/ErrorBoundary';
import { StoreProvider } from '@/app/providers/StoreProvider';

render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root'),
);
