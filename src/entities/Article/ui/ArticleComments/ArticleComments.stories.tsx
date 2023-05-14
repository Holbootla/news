import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleComments } from './ArticleComments';
import { ReducersList } from '@/shared/lib';
import { articleCommentsReducer } from '../../model/slice/articleCommentsSlice';
import { StoreDecorator } from '@/shared/storybook/decorators/StoreDecorator';
import { articleCommentsNormalizedDataMock } from '@/entities/Article/model/mocks/articleCommentsNormalizedDataMock';

export default {
    title: 'entities/ArticleComments',
    component: ArticleComments,
} as ComponentMeta<typeof ArticleComments>;

const asyncReducers:ReducersList = {
    articleComments: articleCommentsReducer,
};

const Template: ComponentStory<typeof ArticleComments> = (args) => <ArticleComments {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StoreDecorator(
    {
        articleComments: {
            ids: ['1', '2'],
            entities: articleCommentsNormalizedDataMock,
            error: undefined,
            isLoading: false,
        },
    },
    asyncReducers,
)];
