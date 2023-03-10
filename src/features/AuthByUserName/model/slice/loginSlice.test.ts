import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/loginSchema';

describe('loginSlice', () => {
    test('set username', () => {
        const state:DeepPartial<LoginSchema> = { username: '' };
        expect(
            loginReducer(state as LoginSchema, loginActions.setUsername('testUsername')),
        )
            .toEqual({ username: 'testUsername' });
    });

    test('set password', () => {
        const state:DeepPartial<LoginSchema> = { password: '' };
        expect(
            loginReducer(state as LoginSchema, loginActions.setPassword('testPassword')),
        )
            .toEqual({ password: 'testPassword' });
    });
});
