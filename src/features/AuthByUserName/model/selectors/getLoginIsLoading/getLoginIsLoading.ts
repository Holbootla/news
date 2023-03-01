import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from '../getLoginState/getLoginState';

export const getLoginIsLoading = createSelector(getLoginState, (login) => login?.isLoading ?? false);
