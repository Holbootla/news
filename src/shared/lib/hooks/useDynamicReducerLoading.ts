import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchemaKey } from '@/app/providers/StoreProvider';
import { useAppDispatch } from '@/shared/lib';

export type ReducersList = {
    [key in StateSchemaKey]?: Reducer;
}

interface UseDynamicReducerLoadingProps {
    reducers:ReducersList;
    removeAfterUnmount?:boolean;
}

export const useDynamicReducerLoading = ({ reducers, removeAfterUnmount }:UseDynamicReducerLoadingProps) => {
    const dispatch = useAppDispatch();
    const store = useStore() as ReduxStoreWithManager;
    const mountedReducers = store.reducerManager.getReducerMap();
    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = Object.keys(mountedReducers).includes(name);
            if (!mounted) {
                store.reducerManager.add(name as StateSchemaKey, reducer);
                dispatch({ type: `@INIT ${name}` });
            }
        });
        return () => {
            if (removeAfterUnmount) {
                Object.keys(reducers).forEach((name) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@REMOVE ${name}` });
                });
            }
        };
    }, [dispatch, mountedReducers, reducers, removeAfterUnmount, store.reducerManager]);
};
