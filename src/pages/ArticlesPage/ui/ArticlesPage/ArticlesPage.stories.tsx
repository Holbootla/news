import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticlesPage from './ArticlesPage';
import { ReducersList } from '@/shared/lib';
import { articleDataMock } from '@/entities/Article';
import { articlesPageReducer } from '@/pages/ArticlesPage/model/slice/articlesPageSlice';
import { StoreDecorator } from '@/shared/storybook/decorators/StoreDecorator';
import { ArticleSortField } from '@/entities/Article/model/types/article';

export default {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = () => <ArticlesPage />;

const asyncReducers:ReducersList = {
    articlesPage: articlesPageReducer,
};

export const Default = Template.bind({});
Default.decorators = [StoreDecorator(
    {
        articlesPage: {
            entities: { [articleDataMock.id]: articleDataMock },
            ids: [articleDataMock.id],
            page: 2,
            hasMore: false,
            limit: 9,
            view: 'grid',
            error: undefined,
            isLoading: false,
            search: '',
            sort: ArticleSortField.CREATED,
            order: 'desc',
        },
    },
    asyncReducers,
)];
