import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Page } from './Page';
import { StoreDecorator } from '@/shared/storybook/decorators/StoreDecorator';

export default {
    title: 'widgets/Page',
    component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StoreDecorator(
    {
        page: {
            scroll: { somePage: 10 },
        },
    },
)];
