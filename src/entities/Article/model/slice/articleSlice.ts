import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getArticle } from '../services/getArticle';
import { Article } from '../types/article';
import { ArticleSchema } from '../types/articleSchema';

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
                state.errorMessage = undefined;
            })
            .addCase(getArticle.fulfilled, (state, { payload }: PayloadAction<Article>) => {
                state.isLoading = false;
                state.data = payload;
            })
            .addCase(getArticle.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.data = undefined;
                state.errorMessage = payload;
            });
    },
});

export const { reducer: articleReducer } = articleSlice;
