import type { StateSchema } from '@/app/providers/StoreProvider';
import { articlePageCommentsEntityAdapterMock } from '@/shared/lib/tests/mock';
import { CREATE_ARTICLE_COMMENT_ERROR_MESSAGE } from '../../api/createArticleComment';
import { GET_ARTICLE_COMMENTS_ERROR_MESSAGE } from '../../api/getArticleComments';
import {
    selectArticlePageComments,
    selectArticlePageCommentsCreateCommentErrorMessage,
    selectArticlePageCommentsErrorMessage,
    selectArticlePageCommentsIsCommentsLoading,
    selectArticlePageCommentsIsCreateCommentLoading,
} from '../../model/selectors';

describe('articleSelectors', () => {
    test('selectArticlePageComments: should return comments', () => {
        const state: DeepPartial<StateSchema> = {
            articlePage: {
                comments: articlePageCommentsEntityAdapterMock,
            },
        };

        expect(selectArticlePageComments.selectAll(state as StateSchema)).toEqual(
            Object.values(articlePageCommentsEntityAdapterMock.entities).sort(
                // Because slice use sortComparer by id
                (a, b) => b!.id - a!.id,
            ),
        );
    });

    test('selectArticlePageComments: should work with empty state', () => {
        expect(selectArticlePageComments.selectAll({} as StateSchema)).toEqual([]);
    });

    test('selectArticlePageCommentsIsCommentsLoading: should return  true', () => {
        const state: DeepPartial<StateSchema> = {
            articlePage: { comments: { isCommentsLoading: true } },
        };

        expect(selectArticlePageCommentsIsCommentsLoading(state as StateSchema)).toBe(true);
    });

    test('selectArticlePageCommentsIsCommentsLoading: should work with empty state', () => {
        expect(selectArticlePageCommentsIsCommentsLoading({} as StateSchema)).toBe(undefined);
    });

    test('selectArticlePageCommentsIsCreateCommentLoading: should return  true', () => {
        const state: DeepPartial<StateSchema> = {
            articlePage: { comments: { isCreateCommentLoading: true } },
        };

        expect(selectArticlePageCommentsIsCreateCommentLoading(state as StateSchema)).toBe(true);
    });

    test('selectArticlePageCommentsIsCreateCommentLoading: should work with empty state', () => {
        expect(selectArticlePageCommentsIsCreateCommentLoading({} as StateSchema)).toBe(undefined);
    });

    test('selectArticlePageCommentsErrorMessage: should return error message', () => {
        const state: DeepPartial<StateSchema> = {
            articlePage: { comments: { commentsErrorMessage: GET_ARTICLE_COMMENTS_ERROR_MESSAGE } },
        };

        expect(selectArticlePageCommentsErrorMessage(state as StateSchema)).toBe(
            GET_ARTICLE_COMMENTS_ERROR_MESSAGE,
        );
    });

    test('selectArticlePageCommentsErrorMessage: should work with empty state', () => {
        expect(selectArticlePageCommentsErrorMessage({} as StateSchema)).toBe(undefined);
    });

    test('selectArticlePageCommentsCreateCommentErrorMessage: should return error message', () => {
        const state: DeepPartial<StateSchema> = {
            articlePage: {
                comments: { createCommentErrorMessage: CREATE_ARTICLE_COMMENT_ERROR_MESSAGE },
            },
        };

        expect(selectArticlePageCommentsCreateCommentErrorMessage(state as StateSchema)).toBe(
            CREATE_ARTICLE_COMMENT_ERROR_MESSAGE,
        );
    });

    test('selectArticlePageCommentsCreateCommentErrorMessage: should work with empty state', () => {
        expect(selectArticlePageCommentsCreateCommentErrorMessage({} as StateSchema)).toBe(
            undefined,
        );
    });
});
