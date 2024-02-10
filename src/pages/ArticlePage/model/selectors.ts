import type { StateSchema } from '@/app/providers/StoreProvider';
import { articlePageCommentsAdapter } from './slice';

export const selectArticlePageComments = articlePageCommentsAdapter.getSelectors<StateSchema>(
    (state) => state.articlePage?.comments || articlePageCommentsAdapter.getInitialState(),
);
export const selectArticlePageCommentsIsLoading = (state: StateSchema) =>
    state.articlePage?.comments.isLoading;
export const selectArticlePageCommentsErrorMessage = (state: StateSchema) =>
    state.articlePage?.comments.errorMessage;
