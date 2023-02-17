import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTest from '@/shared/Language/config/i18nForTest';

interface RenderCustomOptions {
    route?:string;
}

export const renderCustom = (component:ReactNode, options:RenderCustomOptions = {}) => {
    const { route = '/' } = options;

    render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nForTest}>
                {component}
            </I18nextProvider>
        </MemoryRouter>,
    );
};
