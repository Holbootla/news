import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleDetails } from './ArticleDetails';
import { ReducersList } from '@/shared/lib';
import { articleReducer } from '@/entities/Article';
import { StoreDecorator } from '@/shared/storybook/decorators/StoreDecorator';

export default {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

const asyncReducers:ReducersList = {
    article: articleReducer,
};

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StoreDecorator(
    {
        article: {
            data: {},
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
    },
    asyncReducers,
)];
