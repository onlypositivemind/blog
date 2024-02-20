import type { PayloadAction } from '@reduxjs/toolkit';
import { combineReducers, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { Comment } from '@/entities/Comment';
import { createArticleComment } from '../api/createArticleComment';
import { getArticleComments } from '../api/getArticleComments';
import type { ArticlePageCommentsSchema, ArticlePageSchema } from './types';

const articlePageCommentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
    sortComparer: (a, b) => {
        if (a.id === b.id) {
            return 0;
        }

        return b.id > a.id ? 1 : -1;
    },
});

const articlePageCommentsSlice = createSlice({
    name: 'articlePageComments',
    initialState: articlePageCommentsAdapter.getInitialState<ArticlePageCommentsSchema>({
        ids: [],
        entities: {},
        isLoading: false,
    }),
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(getArticleComments.pending, (state) => {
                state.isLoading = true;
                state.errorMessage = undefined;
            })
            .addCase(
                getArticleComments.fulfilled,
                (state, { payload }: PayloadAction<Comment[]>) => {
                    state.isLoading = false;
                    articlePageCommentsAdapter.setAll(state, payload);
                },
            )
            .addCase(getArticleComments.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.errorMessage = payload;
            })
            .addCase(
                createArticleComment.fulfilled,
                (state, { payload }: PayloadAction<Comment>) => {
                    articlePageCommentsAdapter.setOne(state, payload);
                },
            ),
});

const articlePageReducer = combineReducers<ArticlePageSchema>({
    comments: articlePageCommentsSlice.reducer,
});

export { articlePageCommentsAdapter, articlePageReducer };
