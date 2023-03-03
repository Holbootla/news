import axios from 'axios';
import { loginByUserName } from './loginByUserName';
import { userActions } from '@/entities/User';
import { loginActions } from '@/features/AuthByUserName/model/slice/loginSlice';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

describe('LoginByUserName async service tests', () => {
    test('Success login', async () => {
        const userData = { name: 'testName', id: 'testId' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));

        const thunk = new TestAsyncThunk(loginByUserName);
        const result = await thunk.callThunk({ username: 'testName', password: 'testPassword' });

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userData);
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
        expect(thunk.dispatch).toHaveBeenCalledWith(loginActions.clearLoginData());
        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    });

    test('Fail login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const thunk = new TestAsyncThunk(loginByUserName);
        const result = await thunk.callThunk({ username: 'testName', password: 'testPassword' });

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.payload).toEqual('error');
        expect(result.meta.requestStatus).toBe('rejected');
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    });
});
