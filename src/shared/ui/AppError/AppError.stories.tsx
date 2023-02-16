import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppError } from './AppError';

export default {
    title: 'shared/AppError',
    component: AppError,
} as ComponentMeta<typeof AppError>;

const Template: ComponentStory<typeof AppError> = (args) => <AppError {...args} />;

export const Default = Template.bind({});
