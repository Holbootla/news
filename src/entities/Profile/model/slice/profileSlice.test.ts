import { profileActions, profileReducer } from './profileSlice';
import { ProfileSchema } from '../types/profile';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { fetchProfileData } from '@/entities/Profile/model/services/fetchProfileData/fetchProfileData';

describe('profileSlice', () => {
    const data = {
        username: 'username',
        firstName: 'Ivan',
        lastName: 'Ivanov',
        age: 40,
        country: Country.AUSTRALIA,
        city: 'Sidney',
        currency: Currency.AUD,
        avatar: '',
    };

    test('set readonly', () => {
        const state:DeepPartial<ProfileSchema> = {
            readonly: true,
        };
        expect(
            profileReducer(state as ProfileSchema, profileActions.setReadonly(false)),
        )
            .toEqual({
                readonly: false,
            });
    });

    test('cancel edit', () => {
        const state:DeepPartial<ProfileSchema> = {
            readonly: false,
            data,
            formData: {},
            validateErrors: [],
        };
        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
        )
            .toEqual({
                readonly: true,
                data,
                formData: data,
                validateErrors: undefined,
            });
    });

    test('set formData', () => {
        const state:DeepPartial<ProfileSchema> = {
            formData: data,
        };
        const updatedData = {
            ...data, username: 'updated',
        };
        expect(
            profileReducer(state as ProfileSchema, profileActions.setFormData(updatedData)),
        )
            .toEqual({
                formData: updatedData,
            });
    });

    test('fetchProfileData pending', () => {
        const state:DeepPartial<ProfileSchema> = {
            error: '',
            isLoading: false,
        };
        expect(
            profileReducer(state as ProfileSchema, fetchProfileData.pending),
        )
            .toEqual({
                error: undefined,
                isLoading: true,
            });
    });

    test('fetchProfileData fulfilled', () => {
        const state:DeepPartial<ProfileSchema> = {
            isLoading: true,
            data: undefined,
            formData: undefined,
        };
        expect(
            profileReducer(state as ProfileSchema, fetchProfileData.fulfilled(data, '')),
        )
            .toEqual({
                isLoading: false,
                data,
                formData: data,
            });
    });
});
