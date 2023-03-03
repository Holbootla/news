import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginState } from './getLoginState';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('tests for getLoginState selector', () => {
    test('should return correct login state', () => {
        const state:DeepPartial<StateSchema> = {
            login: {
                username: 'username',
                password: 'password',
                isLoading: false,
                error: 'error',
            },
        };
        expect(getLoginState(state as StateSchema)).toEqual({
            username: 'username',
            password: 'password',
            isLoading: false,
            error: 'error',
        });
    });
    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getLoginState(state as StateSchema)).toEqual({
            username: '',
            password: '',
            isLoading: false,
            error: undefined,
        });
    });
});
