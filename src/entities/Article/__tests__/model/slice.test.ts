import { mockArticleData } from '@/shared/lib/tests/mock';
import { GET_ARTICLE_ERROR_MESSAGE, getArticle } from '../../api/getArticle';
import { articleReducer } from '../../model/slice';
import { ArticleSchema } from '../../model/types/articleSchema';

describe('articleSlice', () => {
    test('getArticle.pending', () => {
        const state: DeepPartial<ArticleSchema> = {
            data: {},
            errorMessage: GET_ARTICLE_ERROR_MESSAGE,
            isLoading: false,
        };

        expect(articleReducer(state as ArticleSchema, getArticle.pending)).toEqual({
            isLoading: true,
        });
    });

    test('getArticle.fulfilled', () => {
        const state: DeepPartial<ArticleSchema> = {
            isLoading: true,
        };

        expect(
            articleReducer(state as ArticleSchema, {
                type: getArticle.fulfilled,
                payload: mockArticleData,
            }),
        ).toEqual({
            isLoading: false,
            data: mockArticleData,
        });
    });

    test('getArticle.rejected', () => {
        const state: DeepPartial<ArticleSchema> = {
            data: {},
            isLoading: true,
        };

        expect(
            articleReducer(state as ArticleSchema, {
                type: getArticle.rejected,
                payload: GET_ARTICLE_ERROR_MESSAGE,
            }),
        ).toEqual({
            errorMessage: GET_ARTICLE_ERROR_MESSAGE,
            isLoading: false,
        });
    });
});
