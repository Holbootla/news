import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppSelect, AppSelectVariants } from './AppSelect';

export default {
    title: 'shared/AppSelect',
    component: AppSelect,
} as ComponentMeta<typeof AppSelect>;

const Template: ComponentStory<typeof AppSelect> = (args) => <AppSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
    variant: AppSelectVariants.PRIMARY,
    label: 'select',
    options: [
        { label: 'Option #1', value: '1' },
        { label: 'Option #2', value: '2' },
        { label: 'Option #3', value: '3' },
    ],
};
