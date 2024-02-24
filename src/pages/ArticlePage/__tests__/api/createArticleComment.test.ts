import type { StateSchema } from '@/app/providers/StoreProvider';
import type { Comment } from '@/entities/Comment';
import { TestAsyncThunk } from '@/shared/lib/tests';
import { articleMock, userAuthDataMock } from '@/shared/lib/tests/mock';
import {
    CREATE_ARTICLE_COMMENT_ERROR_MESSAGE,
    CREATE_ARTICLE_COMMENT_NO_DATA_ERROR_MESSAGE,
    createArticleComment,
} from '../../api/createArticleComment';

const state: DeepPartial<StateSchema> = {
    user: { authData: userAuthDataMock },
    article: { data: articleMock },
};

const commentText = 'Some comment';

const commentResponse: Comment = {
    id: 123,
    text: commentText,
    user: { username: userAuthDataMock.username, avatar: userAuthDataMock.avatar },
};

describe('articlePage/createArticleComment AsyncThunk', () => {
    test('should be fulfilled', async () => {
        const thunk = new TestAsyncThunk(createArticleComment, state);

        thunk.api.post.mockReturnValue(Promise.resolve({ data: commentResponse }));

        const result = await thunk.callThunk({ comment: commentText });

        expect(thunk.getState).toHaveBeenCalledTimes(2);
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(commentResponse);
    });

    test('should be used resetComment if it exist and thunk was fulfilled', async () => {
        const thunk = new TestAsyncThunk(createArticleComment, state);
        const resetComment = jest.fn();

        thunk.api.post.mockReturnValue(Promise.resolve({ data: commentResponse }));

        const result = await thunk.callThunk({ comment: commentText, resetComment });

        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(resetComment).toHaveBeenCalled();
    });

    test('should be rejected', async () => {
        const thunk = new TestAsyncThunk(createArticleComment, state);

        thunk.api.post.mockReturnValue(Promise.reject());

        const result = await thunk.callThunk({ comment: commentText });

        expect(thunk.getState).toHaveBeenCalledTimes(2);
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe(CREATE_ARTICLE_COMMENT_ERROR_MESSAGE);
    });

    test('should be rejected if there is no userAuthData or articleData in state', async () => {
        const thunk = new TestAsyncThunk(createArticleComment, {
            user: { authData: undefined },
            article: { data: undefined },
        });

        const result = await thunk.callThunk({ comment: commentText });

        expect(thunk.getState).toHaveBeenCalledTimes(2);
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).not.toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe(CREATE_ARTICLE_COMMENT_NO_DATA_ERROR_MESSAGE);
    });
});
