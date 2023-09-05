import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleDetailsPage from './ArticleDetailsPage';
import { StoreDecorator } from '@/shared/storybook/decorators/StoreDecorator';
import { ReducersList } from '@/shared/lib';
import { articleDataMock } from '@/entities/Article';
import { articleCommentsNormalizedDataMock } from '@/entities/Article/model/mocks/articleCommentsNormalizedDataMock';
import { ArticleDetailsPageReducer } from '@/pages/ArticleDetailsPage/model/slice';

export default {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = () => <ArticleDetailsPage />;

const asyncReducers:ReducersList = {
    articleDetailsPage: ArticleDetailsPageReducer,
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
        articleDetailsPage: {
            comments: {
                ids: ['1', '2'],
                entities: articleCommentsNormalizedDataMock,
                error: undefined,
                isLoading: false,
            },
            addComments: {
                error: undefined,
                isLoading: false,
            },
            recommendations: {
                ids: ['1'],
                entities: { 1: articleDataMock },
                error: undefined,
                isLoading: false,
            },
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
        articleDetailsPage: {
            comments: {
                ids: [],
                entities: {},
                error: undefined,
                isLoading: true,
            },
            addComments: {
                error: undefined,
                isLoading: true,
            },
            recommendations: {
                ids: [],
                entities: {},
                error: undefined,
                isLoading: true,
            },
        },
    },
    asyncReducers,
)];
