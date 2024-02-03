import { TestAsyncThunk } from '@/shared/lib/tests';
import { mockArticleData } from '@/shared/lib/tests/mock';
import { GET_ARTICLE_ERROR_MESSAGE, getArticle } from '../../api/getArticle';

describe('getArticle AsyncThunk', () => {
    test('should be fulfilled', async () => {
        const thunk = new TestAsyncThunk(getArticle);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: mockArticleData }));

        const result = await thunk.callThunk('1');

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockArticleData);
    });

    test('should be rejected', async () => {
        const thunk = new TestAsyncThunk(getArticle);
        thunk.api.get.mockReturnValue(Promise.reject());

        const result = await thunk.callThunk('1');

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe(GET_ARTICLE_ERROR_MESSAGE);
    });
});
