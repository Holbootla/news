import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SelectArticlesView } from './SelectArticlesView';

export default {
    title: 'features/SelectArticlesView',
    component: SelectArticlesView,
} as ComponentMeta<typeof SelectArticlesView>;

const Template: ComponentStory<typeof SelectArticlesView> = (args) => <SelectArticlesView {...args} />;

export const Default = Template.bind({});
Default.args = {
    view: 'grid',
};
