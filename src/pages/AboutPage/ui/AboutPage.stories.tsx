import { ComponentMeta, ComponentStory } from '@storybook/react';
import AboutPage from './AboutPage';
import { StoreDecorator } from '@/shared/storybook/decorators/StoreDecorator';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage {...args} />;

export const Default = Template.bind({});
Default.decorators = [StoreDecorator({})];
