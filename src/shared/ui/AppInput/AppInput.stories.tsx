import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppInput, AppInputVariants } from './AppInput';

export default {
    title: 'shared/AppInput',
    component: AppInput,
} as ComponentMeta<typeof AppInput>;

const Template: ComponentStory<typeof AppInput> = (args) => <AppInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: AppInputVariants.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: AppInputVariants.SECONDARY,
};
