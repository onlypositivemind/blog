import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getErrorMessageAsyncThunk } from '@/shared/lib/utils';
import { Article } from '../types/article';

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

export { getArticle, GET_ARTICLE_ERROR_MESSAGE };
