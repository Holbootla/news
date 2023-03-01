import { Story } from '@storybook/react';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';

export const StoreDecorator = (
    state:DeepPartial<StateSchema>,
    asyncReducers?:DeepPartial<ReducersMapObject<StateSchema>>,
) => function fn(StoryComponent:Story) {
    return (
        <StoreProvider initialState={state} asyncReducers={asyncReducers}>
            <StoryComponent />
        </StoreProvider>
    );
};
