import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Navbar } from './Navbar';
import { StoreDecorator } from '@/shared/storybook/decorators/StoreDecorator';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.decorators = [
    StoreDecorator({
        user: {},
    }),
];
