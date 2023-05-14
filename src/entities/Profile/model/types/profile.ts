import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';

export enum ValidateProfileError {
    INCORRECT_USERNAME = 'INCORRECT_USERNAME',
    INCORRECT_FIRSTNAME = 'INCORRECT_FIRSTNAME',
    INCORRECT_LASTNAME = 'INCORRECT_USERNAME',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    INCORRECT_CITY = 'INCORRECT_CITY',
    INCORRECT_CURRENCY = 'INCORRECT_CURRENCY',
    INCORRECT_AVATAR = 'INCORRECT_AVATAR',
    SERVER_ERROR = 'SERVER_ERROR'
}

export interface Profile {
    username?:string,
    firstName?:string,
    lastName?:string,
    age?: number,
    country?: Country,
    city?:string,
    currency?: Currency,
    avatar?:string
}

export interface ProfileSchema {
    data?:Profile;
    formData?:Profile;
    isLoading:boolean;
    error?:string;
    readonly:boolean;
    validateErrors?:Array<ValidateProfileError>;
}
