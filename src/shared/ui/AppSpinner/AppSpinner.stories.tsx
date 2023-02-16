import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppSpinner } from './AppSpinner';

export default {
    title: 'shared/AppSpinner',
    component: AppSpinner,
} as ComponentMeta<typeof AppSpinner>;

const Template: ComponentStory<typeof AppSpinner> = (args) => <AppSpinner {...args} />;

export const Default = Template.bind({});
