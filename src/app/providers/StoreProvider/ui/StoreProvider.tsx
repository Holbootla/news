import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { DeepPartial } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
    initialState?:DeepPartial<StateSchema>;
    children:ReactNode;
}

export const StoreProvider = (props:StoreProviderProps) => {
    const { initialState, children } = props;

    const store = createReduxStore(initialState as StateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
