/* eslint-disable max-len */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleDetails } from './ArticleDetails';
import { ReducersList } from '@/shared/lib';
import { articleReducer } from '../../model/slice/articleSlice';
import { StoreDecorator } from '@/shared/storybook/decorators/StoreDecorator';
import { ArticleBlockType, ArticleType } from '../../model/types/article';

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
            data: {
                id: '1',
                title: 'Lorem ipsum dolor sit',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit.',
                img: 'https://cdn.pixabay.com/photo/2023/03/24/23/06/goat-7874883_960_720.jpg',
                views: 666,
                createdAt: '27.03.2023',
                type: [ArticleType.HISTORY],
                blocks: [
                    {
                        id: '1',
                        type: ArticleBlockType.TEXT,
                        title: 'Lorem ipsum dolor sit amet.',
                        paragraphs: [
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis dignissim lorem. Aliquam id ipsum mi. Mauris et iaculis libero. Etiam id sodales sem. Cras urna elit, gravida sit amet congue eget, lacinia ac tellus. Proin eget enim egestas, volutpat metus laoreet, dignissim turpis. Vivamus odio sem, convallis id volutpat a, aliquam a mi. In metus ipsum, tincidunt eu sollicitudin ut, venenatis ut neque. Fusce malesuada urna eget varius fermentum. Vestibulum elementum sodales mattis. Quisque.',
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis dignissim lorem. Aliquam id ipsum mi. Mauris et iaculis libero. Etiam id sodales sem. Cras urna elit, gravida sit amet congue eget, lacinia ac tellus. Proin eget enim egestas, volutpat metus laoreet, dignissim turpis. Vivamus odio sem, convallis id volutpat a, aliquam a mi. In metus ipsum, tincidunt eu sollicitudin ut, venenatis ut neque. Fusce malesuada urna eget varius fermentum. Vestibulum elementum sodales mattis. Quisque.',
                        ],
                    },
                    {
                        id: '2',
                        type: ArticleBlockType.CODE,
                        code: 'const root = ReactDOM.createRoot(document.getElementById(\'root\'));\nroot.render(<h1>Hello, world!</h1>);',
                    },
                    {
                        id: '4',
                        type: ArticleBlockType.IMAGE,
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        src: 'https://cdn.pixabay.com/photo/2023/03/24/23/06/goat-7874883_960_720.jpg',
                    },
                    {
                        id: '5',
                        type: ArticleBlockType.TEXT,
                        title: 'Lorem ipsum dolor sit amet, consectetur.',
                        paragraphs: [
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis dignissim lorem. Aliquam id ipsum mi. Mauris et iaculis libero. Etiam id sodales sem. Cras urna elit, gravida sit amet congue eget, lacinia ac tellus. Proin eget enim egestas, volutpat metus laoreet, dignissim turpis. Vivamus odio sem, convallis id volutpat a, aliquam a mi. In metus ipsum, tincidunt eu sollicitudin ut, venenatis ut neque. Fusce malesuada urna eget varius fermentum. Vestibulum elementum sodales mattis. Quisque.',
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis dignissim lorem. Aliquam id ipsum mi. Mauris et iaculis libero. Etiam id sodales sem. Cras urna elit, gravida sit amet congue eget, lacinia ac tellus. Proin eget enim egestas, volutpat metus laoreet, dignissim turpis. Vivamus odio sem, convallis id volutpat a, aliquam a mi. In metus ipsum, tincidunt eu sollicitudin ut, venenatis ut neque. Fusce malesuada urna eget varius fermentum. Vestibulum elementum sodales mattis. Quisque.',
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis dignissim lorem. Aliquam id ipsum mi. Mauris et iaculis libero. Etiam id sodales sem. Cras urna elit, gravida sit amet congue eget, lacinia ac tellus. Proin eget enim egestas, volutpat metus laoreet, dignissim turpis. Vivamus odio sem, convallis id volutpat a, aliquam a mi. In metus ipsum, tincidunt eu sollicitudin ut, venenatis ut neque. Fusce malesuada urna eget varius fermentum. Vestibulum elementum sodales mattis. Quisque.',
                        ],
                    },
                ],
            },
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
