import { StateSchema } from '@/app/providers/StoreProvider';

export const selectArticleIsLoading = (state: StateSchema) => state.article?.isLoading;
export const selectArticleData = (state: StateSchema) => state.article?.data;
export const selectArticleErrorMessage = (state: StateSchema) => state.article?.errorMessage;
