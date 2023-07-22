import { ComponentMeta, ComponentStory } from '@storybook/react';
import NotFoundPage from './NotFoundPage';
import { StoreDecorator } from '@/shared/storybook/decorators/StoreDecorator';

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />;

export const Default = Template.bind({});
Default.decorators = [StoreDecorator({})];
