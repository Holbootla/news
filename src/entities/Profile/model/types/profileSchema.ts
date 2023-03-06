import { Country, Currency } from '@/shared/const/common';

export interface Profile {
    'username':string,
    'firstName':string,
    'lastName':string,
    'age': number,
    'country': Country,
    'city':string,
    'currency': Currency,
    'avatar':string
}

export interface ProfileSchema {
    data?:Profile;
    isLoading:boolean;
    error?:string;
    readonly:boolean;
}
