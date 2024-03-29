import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { CounterSchema } from '@/entities/Counter';
import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/AuthByUserName';
import { ProfileSchema } from '@/entities/Profile';
import { ArticleSchema } from '@/entities/Article';
import { ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage';
import { ArticlesPageSchema } from '@/pages/ArticlesPage';
import { PageSchema } from '@/widgets/Page/model/types/page';

export interface StateSchema {
    counter:CounterSchema,
    user:UserSchema,
    page:PageSchema,
    login?:LoginSchema,
    profile?:ProfileSchema,
    article?:ArticleSchema,
    articlesPage?:ArticlesPageSchema,
    articleDetailsPage?:ArticleDetailsPageSchema,
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap:()=>ReducersMapObject<StateSchema>,
    reduce: (state:StateSchema, action:AnyAction)=>CombinedState<StateSchema>,
    add: (key:StateSchemaKey, reducer:Reducer)=>void,
    remove: (key:StateSchemaKey)=>void,
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager:ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue:T,
    extra:ThunkExtraArg,
    state:StateSchema,
}
