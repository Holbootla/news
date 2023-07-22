import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleListView } from '@/entities/Article';

export interface ArticlesPageSchema extends EntityState<Article>{
    isLoading:boolean;
    error?:string;
    view:ArticleListView;
    limit:number;
    page:number;
    hasMore:boolean;
    _inited?:boolean;
}