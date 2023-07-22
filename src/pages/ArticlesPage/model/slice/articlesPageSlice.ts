import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Article, ArticleListView } from '@/entities/Article';
import { ArticlesPageSchema } from '@/pages/ArticlesPage/model/types/articlesPage';
import { fetchArticles } from '@/pages/ArticlesPage/model/services/fetchArticles/fetchArticles';
import { ARTICLES_VIEW_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';

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
    }),
    reducers: {
        setView: (state, action:PayloadAction<ArticleListView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCAL_STORAGE_KEY, action.payload);
            state.limit = action.payload === 'list' ? 3 : 9;
        },
        initState: (state) => {
            const view = localStorage.getItem(ARTICLES_VIEW_LOCAL_STORAGE_KEY) as ArticleListView;
            state.view = view;
            state.limit = view === 'list' ? 3 : 9;
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticles.fulfilled, (state, action:PayloadAction<Article[]>) => {
                state.isLoading = false;
                articlesAdapter.addMany(state, action.payload);
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
