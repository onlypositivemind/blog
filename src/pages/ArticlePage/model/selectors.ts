import type { StateSchema } from '@/app/providers/StoreProvider';
import { articlePageCommentsAdapter } from './slice';

const selectArticlePageComments = articlePageCommentsAdapter.getSelectors<StateSchema>(
    (state) => state.articlePage?.comments || articlePageCommentsAdapter.getInitialState(),
);

const selectArticlePageCommentsIsLoading = (state: StateSchema) =>
    state.articlePage?.comments.isLoading;

const selectArticlePageCommentsErrorMessage = (state: StateSchema) =>
    state.articlePage?.comments.errorMessage;

export {
    selectArticlePageComments,
    selectArticlePageCommentsIsLoading,
    selectArticlePageCommentsErrorMessage,
};
