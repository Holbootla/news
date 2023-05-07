import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppCode } from './AppCode';

export default {
    title: 'shared/AppCode',
    component: AppCode,
} as ComponentMeta<typeof AppCode>;

const Template: ComponentStory<typeof AppCode> = (args) => <AppCode {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: `
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppCode } from './AppCode';

export default {
    title: 'shared/AppCode',
    component: AppCode,
} as ComponentMeta<typeof AppCode>;

const Template: ComponentStory<typeof AppCode> = (args) => <AppCode {...args} />;

export const Default = Template.bind({});
Default.args = {};
    `,
};
