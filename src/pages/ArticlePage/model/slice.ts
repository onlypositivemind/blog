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
        isCommentsLoading: false,
        isCreateCommentLoading: false,
    }),
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(getArticleComments.pending, (state) => {
                state.isCommentsLoading = true;
                state.commentsErrorMessage = undefined;
            })
            .addCase(
                getArticleComments.fulfilled,
                (state, { payload }: PayloadAction<Comment[]>) => {
                    state.isCommentsLoading = false;
                    articlePageCommentsAdapter.setAll(state, payload);
                },
            )
            .addCase(getArticleComments.rejected, (state, { payload }) => {
                state.isCommentsLoading = false;
                state.commentsErrorMessage = payload as string;
            })
            .addCase(createArticleComment.pending, (state) => {
                state.isCreateCommentLoading = true;
                state.createCommentErrorMessage = undefined;
            })
            .addCase(
                createArticleComment.fulfilled,
                (state, { payload }: PayloadAction<Comment>) => {
                    state.isCreateCommentLoading = false;
                    articlePageCommentsAdapter.setOne(state, payload);
                },
            )
            .addCase(createArticleComment.rejected, (state, { payload }) => {
                state.isCreateCommentLoading = false;
                state.createCommentErrorMessage = payload as string;
            }),
});

const articlePageReducer = combineReducers<ArticlePageSchema>({
    comments: articlePageCommentsSlice.reducer,
});

export { articlePageCommentsAdapter, articlePageReducer };
