import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';

export interface Profile {
    'username'?:string,
    'firstName'?:string,
    'lastName'?:string,
    'age'?: number,
    'country'?: Country,
    'city'?:string,
    'currency'?: Currency,
    'avatar'?:string
}

export interface ProfileSchema {
    data?:Profile;
    formData?:Profile;
    isLoading:boolean;
    error?:string;
    readonly:boolean;
}
