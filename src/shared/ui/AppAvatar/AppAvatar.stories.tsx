import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppAvatar, AppAvatarSizes } from './AppAvatar';
import DefaultAvatar from '@/shared/assets/images/default-avatar.jpg';

export default {
    title: 'shared/AppAvatar',
    component: AppAvatar,
} as ComponentMeta<typeof AppAvatar>;

const Template: ComponentStory<typeof AppAvatar> = (args) => <AppAvatar {...args} />;

export const Default = Template.bind({});
Default.args = {
    source: DefaultAvatar,
    size: AppAvatarSizes.M,
};
