export type ArticleBlockType = 'text' | 'image' | 'code';

export interface ArticleBlock {
    id: string,
    type: ArticleBlockType,
    title: string,
    paragraphs: Array<string>
}

export type ArticleType = 'history' | 'it' | 'live';

export interface Article {
    id: string,
    title: string,
    subtitle: string,
    img: string,
    views: number,
    createdAt: string,
    type: Array<ArticleType>,
    blocks: Array<ArticleBlock>
}

export interface ArticleSchema {
    data?:Article;
    isLoading:boolean;
    error?:string;
}
