/* eslint-disable max-len */
import { Article, ArticleType } from '../types/article';
import { blockTextDataMock } from './blockTextDataMock';
import { blockCodeDataMock } from './blockCodeDataMock';
import { blockImageDataMock } from './blockImageDataMock';

export const articleDataMock:Article = {
    id: '1',
    title: 'Lorem ipsum dolor sit',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit.',
    img: 'https://cdn.pixabay.com/photo/2023/03/24/23/06/goat-7874883_960_720.jpg',
    views: 666,
    createdAt: '27.03.2023',
    type: [ArticleType.HISTORY],
    blocks: [
        blockTextDataMock,
        blockCodeDataMock,
        blockImageDataMock,
    ],
};
