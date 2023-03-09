import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from '@/shared/storybook/decorators/StoreDecorator';
import { ReducersList } from '@/shared/lib';
import { profileReducer } from '@/entities/Profile';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

const asyncReducers:ReducersList = {
    profile: profileReducer,
};

export const Default = Template.bind({});
Default.decorators = [
    StoreDecorator(
        {},
        asyncReducers,
    ),
];
