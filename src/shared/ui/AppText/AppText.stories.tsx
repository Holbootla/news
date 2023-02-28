import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppText, AppTextVariants } from './AppText';

export default {
    title: 'shared/AppText',
    component: AppText,
} as ComponentMeta<typeof AppText>;

const Template: ComponentStory<typeof AppText> = (args) => (
    <AppText
        title="Title"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        {...args}
    />
);

export const Primary = Template.bind({});
Primary.args = {
    variant: AppTextVariants.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: AppTextVariants.SECONDARY,
};

export const Critical = Template.bind({});
Critical.args = {
    variant: AppTextVariants.CRITICAL,
};
