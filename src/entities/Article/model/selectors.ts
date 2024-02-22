import type { StateSchema } from '@/app/providers/StoreProvider';

const selectArticleIsLoading = (state: StateSchema) => state.article?.isLoading;

const selectArticleData = (state: StateSchema) => state.article?.data;

const selectArticleErrorMessage = (state: StateSchema) => state.article?.errorMessage;

export { selectArticleIsLoading, selectArticleData, selectArticleErrorMessage };
