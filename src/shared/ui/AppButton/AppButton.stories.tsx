import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppButton, AppButtonVariants } from './AppButton';

export default {
    title: 'shared/AppButton',
    component: AppButton,
} as ComponentMeta<typeof AppButton>;

const Template: ComponentStory<typeof AppButton> = (args) => <AppButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: AppButtonVariants.PRIMARY,
    children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: AppButtonVariants.SECONDARY,
    children: 'Button',
};
