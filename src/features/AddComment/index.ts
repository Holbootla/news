import { FC, lazy } from 'react';
import { AddCommentFormProps } from './ui/AddCommentForm/AddCommentForm';

export const AddCommentForm = lazy<FC<AddCommentFormProps>>(
    () => import('./ui/AddCommentForm/AddCommentForm'),
);
