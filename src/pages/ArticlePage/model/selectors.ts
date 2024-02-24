import type { StateSchema } from '@/app/providers/StoreProvider';
import { articlePageCommentsAdapter } from './slice';

const selectArticlePageComments = articlePageCommentsAdapter.getSelectors<StateSchema>(
    (state) => state.articlePage?.comments || articlePageCommentsAdapter.getInitialState(),
);

const selectArticlePageCommentsIsCommentsLoading = (state: StateSchema) =>
    state.articlePage?.comments.isCommentsLoading;

const selectArticlePageCommentsErrorMessage = (state: StateSchema) =>
    state.articlePage?.comments.commentsErrorMessage;

const selectArticlePageCommentsIsCreateCommentLoading = (state: StateSchema) =>
    state.articlePage?.comments.isCreateCommentLoading;

const selectArticlePageCommentsCreateCommentErrorMessage = (state: StateSchema) =>
    state.articlePage?.comments.createCommentErrorMessage;

export {
    selectArticlePageComments,
    selectArticlePageCommentsIsCommentsLoading,
    selectArticlePageCommentsErrorMessage,
    selectArticlePageCommentsIsCreateCommentLoading,
    selectArticlePageCommentsCreateCommentErrorMessage,
};
