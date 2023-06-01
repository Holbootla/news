import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { CounterSchema } from '@/entities/Counter';
import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/AuthByUserName';
import { ProfileSchema } from '@/entities/Profile';
import { ArticleSchema } from '@/entities/Article';
import { AddArticleCommentSchema, ArticleCommentsSchema } from '@/pages/ArticleDetailsPage';

export interface StateSchema {
    counter:CounterSchema,
    user:UserSchema,
    login?:LoginSchema,
    profile?:ProfileSchema,
    article?:ArticleSchema,
    articleComments?:ArticleCommentsSchema,
    addArticleComment?:AddArticleCommentSchema,
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
