import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { getArticle } from '../api/getArticle';
import type { Article } from './types/article';
import type { ArticleSchema } from './types/articleSchema';

const initialState: ArticleSchema = {
    isLoading: false,
};

const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getArticle.pending, (state) => {
                state.isLoading = true;
                state.data = undefined;
                state.errorMessage = undefined;
            })
            .addCase(getArticle.fulfilled, (state, { payload }: PayloadAction<Article>) => {
                state.isLoading = false;
                state.data = payload;
            })
            .addCase(getArticle.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.data = undefined;
                state.errorMessage = payload as string;
            });
    },
});

export const { reducer: articleReducer } = articleSlice;
