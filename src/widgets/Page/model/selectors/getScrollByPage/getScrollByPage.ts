import { createSelector } from '@reduxjs/toolkit';
import { getScroll } from '@/widgets/Page/model/selectors/getScroll/getScroll';
import { StateSchema } from '@/app/providers/StoreProvider';

export const getScrollByPage = createSelector(
    getScroll,
    (state:StateSchema, page:string) => page,
    (scroll, page) => scroll?.[page] ?? 0,
);
