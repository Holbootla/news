import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleDetailsPage from './ArticleDetailsPage';
import { StoreDecorator } from '@/shared/storybook/decorators/StoreDecorator';
import { ReducersList } from '@/shared/lib';
import { articleDataMock, articleReducer } from '@/entities/Article';
import { articleCommentsNormalizedDataMock } from '@/entities/Article/model/mocks/articleCommentsNormalizedDataMock';
import { articleCommentsReducer } from '@/entities/Article/model/slice/articleCommentsSlice';

export default {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = () => <ArticleDetailsPage />;

const asyncReducers:ReducersList = {
    article: articleReducer,
    articleComments: articleCommentsReducer,
};

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StoreDecorator(
    {
        article: {
            data: articleDataMock,
            error: undefined,
            isLoading: false,
        },
        articleComments: {
            ids: ['1', '2'],
            entities: articleCommentsNormalizedDataMock,
            error: undefined,
            isLoading: false,
        },
    },
    asyncReducers,
)];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator(
    {
        article: {
            data: {},
            error: undefined,
            isLoading: true,
        },
        articleComments: {
            ids: [],
            entities: {},
            error: undefined,
            isLoading: true,
        },
    },
    asyncReducers,
)];
