import { getLoginUsername } from './getLoginUsername';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('tests for getLoginUsername selector', () => {
    test('should return correct value', () => {
        const state:DeepPartial<StateSchema> = {
            login: {
                username: 'username',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('username');
    });
    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
