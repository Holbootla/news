import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { StoreDecorator } from '@/shared/storybook/decorators/StoreDecorator';
import { ReducersList } from '@/shared/lib';
import { profileReducer } from '../../model/slice/profileSlice';
import { ValidateProfileError } from '../../model/types/profile';
import DefaultAvatar from '@/shared/assets/images/default-avatar.jpg';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

const asyncReducers:ReducersList = {
    profile: profileReducer,
};

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

export const Default = Template.bind({});
Default.decorators = [
    StoreDecorator(
        {
            profile: {
                data: userData,
                formData: userData,
                error: undefined,
                isLoading: false,
                readonly: true,
                validateErrors: undefined,
            },
        },
        asyncReducers,
    ),
];

export const ServerError = Template.bind({});
ServerError.decorators = [
    StoreDecorator(
        {
            profile: {
                data: userData,
                formData: userData,
                error: ValidateProfileError.SERVER_ERROR,
                isLoading: false,
                readonly: true,
                validateErrors: undefined,
            },
        },
        asyncReducers,
    ),
];

export const ValidationError = Template.bind({});
ValidationError.decorators = [
    StoreDecorator(
        {
            profile: {
                data: userData,
                formData: userData,
                error: undefined,
                isLoading: false,
                readonly: false,
                validateErrors: [
                    ValidateProfileError.INCORRECT_USERNAME,
                    ValidateProfileError.INCORRECT_FIRSTNAME,
                    ValidateProfileError.INCORRECT_AGE,
                ],
            },
        },
        asyncReducers,
    ),
];

export const Loading = Template.bind({});
Loading.decorators = [
    StoreDecorator(
        {
            profile: {
                data: userData,
                formData: userData,
                error: ValidateProfileError.SERVER_ERROR,
                isLoading: true,
                readonly: true,
                validateErrors: undefined,
            },
        },
        asyncReducers,
    ),
];
