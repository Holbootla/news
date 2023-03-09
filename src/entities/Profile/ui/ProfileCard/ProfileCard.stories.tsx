import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { StoreDecorator } from '@/shared/storybook/decorators/StoreDecorator';
import { ReducersList } from '@/shared/lib';
import { profileReducer } from '../../model/slice/profileSlice';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = () => <ProfileCard />;

const asyncReducers:ReducersList = {
    profile: profileReducer,
};

export const Default = Template.bind({});
Default.decorators = [
    StoreDecorator(
        {
            profile: {},
        },
        asyncReducers,
    ),
];
