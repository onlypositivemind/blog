import type { StateSchema } from '@/app/providers/StoreProvider';
import { articleMock } from '@/shared/lib/tests/mock';
import { GET_ARTICLE_ERROR_MESSAGE } from '../../api/getArticle';
import {
    selectArticleData,
    selectArticleErrorMessage,
    selectArticleIsLoading,
} from '../../model/selectors';

describe('articleSelectors', () => {
    test('selectArticleData: should return data', () => {
        const state: DeepPartial<StateSchema> = {
            article: { data: articleMock },
        };

        expect(selectArticleData(state as StateSchema)).toBe(articleMock);
    });

    test('selectArticleData: should work with empty state', () => {
        expect(selectArticleData({} as StateSchema)).toBe(undefined);
    });

    test('selectArticleIsLoading: should return true', () => {
        const state: DeepPartial<StateSchema> = {
            article: { isLoading: true },
        };

        expect(selectArticleIsLoading(state as StateSchema)).toBe(true);
    });

    test('selectArticleIsLoading: should work with empty state', () => {
        expect(selectArticleIsLoading({} as StateSchema)).toBe(undefined);
    });

    test('selectArticleErrorMessage: should return error message', () => {
        const state: DeepPartial<StateSchema> = {
            article: { errorMessage: GET_ARTICLE_ERROR_MESSAGE },
        };

        expect(selectArticleErrorMessage(state as StateSchema)).toBe(GET_ARTICLE_ERROR_MESSAGE);
    });

    test('selectArticleErrorMessage: should work with empty state', () => {
        expect(selectArticleErrorMessage({} as StateSchema)).toBe(undefined);
    });
});
