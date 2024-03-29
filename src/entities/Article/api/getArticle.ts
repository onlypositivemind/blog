import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider';
import { getErrorMessageAsyncThunk } from '@/shared/lib/utils';
import type { Article } from '../model/types/article';

const GET_ARTICLE_ERROR_MESSAGE = 'GetArticleServiceError';

const getArticle = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'article/getArticle',
    async (id, { extra, rejectWithValue }) => {
        try {
            const { data } = await extra.api.get<Article>(`/articles/${id}`);

            return data;
        } catch (err) {
            return rejectWithValue(getErrorMessageAsyncThunk(err, GET_ARTICLE_ERROR_MESSAGE));
        }
    },
);

export { GET_ARTICLE_ERROR_MESSAGE, getArticle };
