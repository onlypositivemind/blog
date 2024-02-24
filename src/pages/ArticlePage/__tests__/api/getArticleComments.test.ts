import { TestAsyncThunk } from '@/shared/lib/tests';
import { commentsMock } from '@/shared/lib/tests/mock';
import {
    GET_ARTICLE_COMMENTS_ERROR_MESSAGE,
    getArticleComments,
} from '../../api/getArticleComments';

describe('articlePage/getArticleComments AsyncThunk', () => {
    test('should be fulfilled', async () => {
        const thunk = new TestAsyncThunk(getArticleComments);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: commentsMock }));

        const result = await thunk.callThunk('1');

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(commentsMock);
    });

    test('should be rejected', async () => {
        const thunk = new TestAsyncThunk(getArticleComments);
        thunk.api.get.mockReturnValue(Promise.reject());

        const result = await thunk.callThunk('1');

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe(GET_ARTICLE_COMMENTS_ERROR_MESSAGE);
    });
});
