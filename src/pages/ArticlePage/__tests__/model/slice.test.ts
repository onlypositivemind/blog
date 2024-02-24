import { articlePageCommentsEntityAdapterMock, commentMock } from '@/shared/lib/tests/mock';
import {
    CREATE_ARTICLE_COMMENT_ERROR_MESSAGE,
    createArticleComment,
} from '../../api/createArticleComment';
import {
    GET_ARTICLE_COMMENTS_ERROR_MESSAGE,
    getArticleComments,
} from '../../api/getArticleComments';
import { articlePageReducer } from '../../model/slice';
import type { ArticlePageSchema } from '../../model/types';

describe('articlePageSlice', () => {
    test('getArticleComments.pending', () => {
        const state: DeepPartial<ArticlePageSchema> = {
            comments: {
                isCommentsLoading: false,
                commentsErrorMessage: GET_ARTICLE_COMMENTS_ERROR_MESSAGE,
            },
        };

        expect(articlePageReducer(state as ArticlePageSchema, getArticleComments.pending)).toEqual({
            comments: {
                isCommentsLoading: true,
                commentsErrorMessage: undefined,
            },
        });
    });

    test('getArticleComments.fulfilled', () => {
        const state: DeepPartial<ArticlePageSchema> = {
            comments: { isCommentsLoading: true },
        };

        expect(
            articlePageReducer(state as ArticlePageSchema, {
                type: getArticleComments.fulfilled,
                payload: Object.values(articlePageCommentsEntityAdapterMock.entities),
            }),
        ).toEqual({
            comments: {
                ...articlePageCommentsEntityAdapterMock,
                isCommentsLoading: false,
            },
        });
    });

    test('getArticleComments.rejected', () => {
        const state: DeepPartial<ArticlePageSchema> = {
            comments: {
                isCommentsLoading: true,
                commentsErrorMessage: undefined,
            },
        };

        expect(
            articlePageReducer(state as ArticlePageSchema, {
                type: getArticleComments.rejected,
                payload: GET_ARTICLE_COMMENTS_ERROR_MESSAGE,
            }),
        ).toEqual({
            comments: {
                isCommentsLoading: false,
                commentsErrorMessage: GET_ARTICLE_COMMENTS_ERROR_MESSAGE,
            },
        });
    });

    test('createArticleComment.pending', () => {
        const state: DeepPartial<ArticlePageSchema> = {
            comments: {
                isCreateCommentLoading: false,
                createCommentErrorMessage: CREATE_ARTICLE_COMMENT_ERROR_MESSAGE,
            },
        };

        expect(
            articlePageReducer(state as ArticlePageSchema, createArticleComment.pending),
        ).toEqual({
            comments: {
                isCreateCommentLoading: true,
                createCommentErrorMessage: undefined,
            },
        });
    });

    test('createArticleComment.fulfilled', () => {
        const state: DeepPartial<ArticlePageSchema> = {
            comments: { ...articlePageCommentsEntityAdapterMock, isCreateCommentLoading: true },
        };

        expect(
            articlePageReducer(state as ArticlePageSchema, {
                type: createArticleComment.fulfilled,
                payload: commentMock,
            }),
        ).toEqual({
            comments: {
                ids: articlePageCommentsEntityAdapterMock.ids
                    .concat(commentMock.id)
                    // Because slice use sortComparer by id
                    .sort((a, b) => (b as number) - (a as number)),
                entities: { ...articlePageCommentsEntityAdapterMock.entities, 999: commentMock },
                isCreateCommentLoading: false,
            },
        });
    });

    test('createArticleComment.rejected', () => {
        const state: DeepPartial<ArticlePageSchema> = {
            comments: {
                isCreateCommentLoading: true,
                createCommentErrorMessage: undefined,
            },
        };

        expect(
            articlePageReducer(state as ArticlePageSchema, {
                type: createArticleComment.rejected,
                payload: CREATE_ARTICLE_COMMENT_ERROR_MESSAGE,
            }),
        ).toEqual({
            comments: {
                isCreateCommentLoading: false,
                createCommentErrorMessage: CREATE_ARTICLE_COMMENT_ERROR_MESSAGE,
            },
        });
    });
});
