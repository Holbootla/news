import { getLoginPassword } from './getLoginPassword';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('tests for getLoginPassword selector', () => {
    test('should return correct value', () => {
        const state:DeepPartial<StateSchema> = {
            login: {
                password: 'password',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('password');
    });
    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
