import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppCard } from './AppCard';

export default {
    title: 'shared/AppCard',
    component: AppCard,
} as ComponentMeta<typeof AppCard>;

const Template: ComponentStory<typeof AppCard> = (args) => <AppCard {...args} />;

export const Default = Template.bind({});
Default.args = {};
