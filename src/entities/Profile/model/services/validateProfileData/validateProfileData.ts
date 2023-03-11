import { Profile, ValidateProfileError } from '../../types/profile';

export const validateProfileData = (profileData:Profile):Array<ValidateProfileError> => {
    const {
        username, firstName, lastName, age, country, city, currency,
    } = profileData;

    const validateErrors:Array<ValidateProfileError> = [];

    if (!username) {
        validateErrors.push(ValidateProfileError.INCORRECT_USERNAME);
    }

    if (!firstName) {
        validateErrors.push(ValidateProfileError.INCORRECT_FIRSTNAME);
    }

    if (!lastName) {
        validateErrors.push(ValidateProfileError.INCORRECT_LASTNAME);
    }

    if (!age || age < 0) {
        validateErrors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!country) {
        validateErrors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    if (!city) {
        validateErrors.push(ValidateProfileError.INCORRECT_CITY);
    }

    if (!currency) {
        validateErrors.push(ValidateProfileError.INCORRECT_CURRENCY);
    }

    return validateErrors;
};
