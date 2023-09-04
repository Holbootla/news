import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleListView } from '@/entities/Article';
import { SortOrder } from '@/shared/types';
import { ArticleSortField, ArticleType } from '@/entities/Article/model/types/article';

export interface ArticlesPageSchema extends EntityState<Article>{
    isLoading:boolean;
    error?:string;
    _inited?:boolean;

    // pagination
    limit:number;
    page:number;
    hasMore:boolean;

    // filters
    view:ArticleListView;
    order:SortOrder;
    sort:ArticleSortField;
    search:string;
    type:ArticleType;
}
