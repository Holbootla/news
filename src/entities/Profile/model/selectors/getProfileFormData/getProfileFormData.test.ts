import { getProfileFormData } from './getProfileFormData';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import DefaultAvatar from '@/shared/assets/images/default-avatar.jpg';

describe('getProfileFormData', () => {
    const userData = {
        username: 'username',
        firstName: 'Ivan',
        lastName: 'Ivanov',
        age: 40,
        country: Country.AUSTRALIA,
        city: 'Sidney',
        currency: Currency.AUD,
        avatar: DefaultAvatar,
    };

    test('should return profileData state', () => {
        const state:DeepPartial<StateSchema> = {
            profile: {
                formData: userData,
            },
        };
        expect(getProfileFormData(state as StateSchema)).toEqual(userData);
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getProfileFormData(state as StateSchema)).toEqual(undefined);
    });
});
