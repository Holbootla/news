import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Article, ArticleListView } from '@/entities/Article';
import { ArticlesPageSchema } from '../types/articlesPage';
import { fetchArticles } from '../services/fetchArticles/fetchArticles';
import { ARTICLES_VIEW_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';
import { ArticleSortField, ArticleType } from '@/entities/Article/model/types/article';
import { SortOrder } from '@/shared/types';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

export const articlesPageSlice = createSlice({
    name: 'articlesPage',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        ids: [],
        entities: {},
        error: undefined,
        isLoading: false,
        view: 'grid',
        page: 1,
        limit: 9,
        hasMore: true,
        order: 'desc',
        sort: ArticleSortField.CREATED,
        search: '',
        type: ArticleType.ALL,
    }),
    reducers: {
        setPage: (state, action:PayloadAction<number>) => {
            state.page = action.payload;
        },
        setView: (state, action:PayloadAction<ArticleListView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCAL_STORAGE_KEY, action.payload);
            state.limit = action.payload === 'list' ? 3 : 9;
        },
        setOrder: (state, action:PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action:PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
        },
        setSearch: (state, action:PayloadAction<string>) => {
            state.search = action.payload;
        },
        setType: (state, action:PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
        initState: (state, action:PayloadAction<{sort: ArticleSortField, order: SortOrder, search: string,
            type: ArticleType}>) => {
            const view = localStorage.getItem(ARTICLES_VIEW_LOCAL_STORAGE_KEY) as ArticleListView;
            if (action.payload.sort) {
                state.sort = action.payload.sort;
            }
            if (action.payload.order) {
                state.order = action.payload.order;
            }
            if (action.payload.search) {
                state.search = action.payload.search;
            }
            if (action.payload.type) {
                state.type = action.payload.type;
            }
            state.view = view;
            state.limit = view === 'list' ? 3 : 9;
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.isLoading = false;
                if (action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action.payload);
                } else {
                    articlesAdapter.addMany(state, action.payload);
                }
                state.page += 1;
                if (!action.payload.length) {
                    state.hasMore = false;
                }
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    reducer: articlesPageReducer,
    actions: articlesPageActions,
} = articlesPageSlice;
