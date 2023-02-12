import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/shared/ThemeProvider';
import { App } from '@/app';
import '@/shared/Language/config/i18n/';
import { ErrorBoundary } from '@/shared/ErrorBoundary';

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
);
