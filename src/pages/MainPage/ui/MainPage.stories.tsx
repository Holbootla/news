import { ComponentMeta, ComponentStory } from '@storybook/react';
import MainPage from './MainPage';
import { StoreDecorator } from '@/shared/storybook/decorators/StoreDecorator';

export default {
    title: 'pages/MainPage',
    component: MainPage,
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) => <MainPage {...args} />;

export const Default = Template.bind({});
Default.decorators = [StoreDecorator({})];
