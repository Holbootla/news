import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleListItem } from './ArticleListItem';
import { articleDataMock } from '../../model/mocks/articleDataMock';

export default {
    title: 'entities/ArticleListItem',
    component: ArticleListItem,
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
    view: 'grid',
    article: articleDataMock,
};
