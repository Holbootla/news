import { getProfileData } from './getProfileData';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import DefaultAvatar from '@/shared/assets/images/default-avatar.jpg';

describe('getProfileData', () => {
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
                data: userData,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(userData);
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
