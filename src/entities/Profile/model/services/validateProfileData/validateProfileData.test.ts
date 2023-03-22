import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '@/entities/Profile/model/types/profile';

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

    test('Success validation', async () => {
        const result = validateProfileData(userData);

        expect(result).toEqual([]);
    });

    test('Fail username validation', async () => {
        const result = validateProfileData({ ...userData, username: '' });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USERNAME]);
    });

    test('Fail firstName validation', async () => {
        const result = validateProfileData({ ...userData, firstName: '' });
        expect(result).toEqual([ValidateProfileError.INCORRECT_FIRSTNAME]);
    });

    test('Fail lastName validation', async () => {
        const result = validateProfileData({ ...userData, lastName: '' });
        expect(result).toEqual([ValidateProfileError.INCORRECT_LASTNAME]);
    });

    test('Fail age validation', async () => {
        const result = validateProfileData({ ...userData, age: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('Fail country validation', async () => {
        const result = validateProfileData({ ...userData, country: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('Fail city validation', async () => {
        const result = validateProfileData({ ...userData, city: '' });
        expect(result).toEqual([ValidateProfileError.INCORRECT_CITY]);
    });

    test('Fail currency validation', async () => {
        const result = validateProfileData({ ...userData, currency: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_CURRENCY]);
    });

    test('Fail validation of empty data', async () => {
        const result = validateProfileData({});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USERNAME,
            ValidateProfileError.INCORRECT_FIRSTNAME,
            ValidateProfileError.INCORRECT_LASTNAME,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
            ValidateProfileError.INCORRECT_CITY,
            ValidateProfileError.INCORRECT_CURRENCY,
        ]);
    });
});
