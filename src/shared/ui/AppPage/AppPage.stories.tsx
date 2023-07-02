import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppPage } from './AppPage';

export default {
    title: 'shared/AppPage',
    component: AppPage,
} as ComponentMeta<typeof AppPage>;

const Template: ComponentStory<typeof AppPage> = (args) => <AppPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
