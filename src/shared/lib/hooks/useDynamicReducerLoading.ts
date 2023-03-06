import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchemaKey } from '@/app/providers/StoreProvider';
import { useAppDispatch } from '@/shared/lib';

export type ReducersList = {
    [key in StateSchemaKey]?: Reducer;
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface UseDynamicReducerLoadingProps {
    reducers:ReducersList;
    removeAfterUnmount?:boolean;
}

export const useDynamicReducerLoading = ({ reducers, removeAfterUnmount }:UseDynamicReducerLoadingProps) => {
    const dispatch = useAppDispatch();
    const store = useStore() as ReduxStoreWithManager;
    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]:ReducersListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name}` });
        });
        return () => {
            if (removeAfterUnmount) {
                Object.keys(reducers).forEach((name:StateSchemaKey) => {
                    store.reducerManager.remove(name);
                    dispatch({ type: `@REMOVE ${name}` });
                });
            }
        };
    }, [dispatch, reducers, removeAfterUnmount, store.reducerManager]);
};
