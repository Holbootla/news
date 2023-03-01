import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoginForm from './LoginForm';
import { StoreDecorator } from '@/shared/storybook/decorators/StoreDecorator';
import { ReducersList } from '@/shared/lib';
import { loginReducer } from '../../model/slice/loginSlice';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

const asyncReducers:ReducersList = {
    login: loginReducer,
};

export const Default = Template.bind({});
Default.decorators = [
    StoreDecorator(
        {
            login: {
                username: 'admin',
                password: 'password',
            },
        },
        asyncReducers,
    ),
];
