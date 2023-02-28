import { Story } from '@storybook/react';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';

export const StoreDecorator = (state:DeepPartial<StateSchema>) => function fn(StoryComponent:Story) {
    return (
        <StoreProvider initialState={state}>
            <StoryComponent />
        </StoreProvider>
    );
};
