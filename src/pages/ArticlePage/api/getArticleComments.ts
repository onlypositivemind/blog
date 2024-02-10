import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider';
import type { Comment } from '@/entities/Comment';
import { getErrorMessageAsyncThunk } from '@/shared/lib/utils';

const GET_ARTICLE_COMMENTS_ERROR_MESSAGE = 'GetArticleCommentsServiceError';

const getArticleComments = createAsyncThunk<Comment[], string, ThunkConfig<string>>(
    'articlePage/getArticleComments',
    async (articleId, { extra, rejectWithValue }) => {
        try {
            const { data } = await extra.api.get<Comment[]>('/articlesComments', {
                params: { articleId, _expand: 'user' },
            });

            return data;
        } catch (err) {
            return rejectWithValue(
                getErrorMessageAsyncThunk(err, GET_ARTICLE_COMMENTS_ERROR_MESSAGE),
            );
        }
    },
);

export { getArticleComments, GET_ARTICLE_COMMENTS_ERROR_MESSAGE };
