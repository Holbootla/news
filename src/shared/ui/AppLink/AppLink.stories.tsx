import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppLink, AppLinkVariants } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: AppLinkVariants.PRIMARY,
    children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: AppLinkVariants.SECONDARY,
    children: 'Button',
};
