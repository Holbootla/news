import { getProfileValidateErrors } from './getProfileValidateErrors';
import { StateSchema } from '@/app/providers/StoreProvider';
import { ValidateProfileError } from '../../types/profile';

describe('getProfileValidateErrors', () => {
    test('should return profileData state', () => {
        const state:DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileError.INCORRECT_FIRSTNAME,
                    ValidateProfileError.INCORRECT_LASTNAME,
                ],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.INCORRECT_FIRSTNAME,
            ValidateProfileError.INCORRECT_LASTNAME,
        ]);
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
