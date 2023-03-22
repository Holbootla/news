import { updateProfileData } from './updateProfileData';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ValidateProfileError } from '../../types/profile';

describe('updateProfileData async service tests', () => {
    const userData = {
        username: 'username',
        firstName: 'Ivan',
        lastName: 'Ivanov',
        age: 40,
        country: Country.AUSTRALIA,
        city: 'Sidney',
        currency: Currency.AUD,
        avatar: '',
    };

    test('Success data updating', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                formData: userData,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data: userData }));
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userData);
    });

    test('Fail data updating with server error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                formData: userData,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe(ValidateProfileError.SERVER_ERROR);
    });

    test('Fail data updating with validation error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                formData: { ...userData, username: '' },
            },
        });
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalledTimes(0);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USERNAME]);
    });
});
