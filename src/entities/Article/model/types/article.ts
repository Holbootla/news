import { User } from '@/entities/User';

export type ArticleListView = 'grid' | 'list';

export enum ArticleSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED = 'createdAt',
}

export enum ArticleBlockType {
    CODE = 'code',
    IMAGE = 'image',
    TEXT = 'text',
}

export interface ArticleBlockBase {
    id: string,
    type: ArticleBlockType;
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT;
    paragraphs: Array<string>
    title?: string,
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title?: string;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
    title?: string,
}

export type ArticleBlock = ArticleTextBlock | ArticleImageBlock | ArticleCodeBlock;

export enum ArticleType {
    ALL = 'all',
    HISTORY = 'history',
    IT = 'it',
    LIVE = 'live',
}

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    user: User;
    createdAt: string;
    type: Array<ArticleType>;
    blocks: Array<ArticleBlock>;
}

export interface ArticleSchema {
    data?:Article;
    isLoading:boolean;
    error?:string;
}
