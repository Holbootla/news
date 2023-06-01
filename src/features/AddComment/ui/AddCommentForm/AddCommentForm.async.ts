import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

export const AsyncAddCommentForm = lazy<FC<AddCommentFormProps>>(() => import('./AddCommentForm'));
