import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleList } from './ArticleList';
import { articleDataMock } from '../../model/mocks/articleDataMock';

export default {
    title: 'entities/ArticleList',
    component: ArticleList,
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const Default = Template.bind({});
Default.args = {
    view: 'grid',
    articles: [articleDataMock, articleDataMock],
};
