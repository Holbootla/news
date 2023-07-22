import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PageSchema } from '@/widgets/Page/model/types/page';

const initialState:PageSchema = {
    scroll: {},
};

export const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setScroll: (state, action:PayloadAction<{page: string, scroll: number}>) => {
            state.scroll[action.payload.page] = action.payload.scroll;
        },
    },
});

export const {
    reducer: pageReducer,
    actions: pageActions,
} = pageSlice;
