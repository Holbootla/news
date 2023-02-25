import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { DeepPartial } from '@reduxjs/toolkit';
import i18nForTest from '@/shared/Language/config/i18nForTest';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';

interface RenderCustomOptions {
    route?:string;
    initialState?:DeepPartial<StateSchema>
}

export const renderCustom = (component:ReactNode, options:RenderCustomOptions = {}) => {
    const {
        route = '/',
        initialState,
    } = options;

    render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,
    );
};
