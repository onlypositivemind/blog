import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider';
import { selectArticleData } from '@/entities/Article';
import type { Comment } from '@/entities/Comment';
import { selectUserAuthData } from '@/entities/User';
import { getErrorMessageAsyncThunk } from '@/shared/lib/utils';

const CREATE_ARTICLE_COMMENT_ERROR_MESSAGE = 'CreateArticleCommentServiceError';

const createArticleComment = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'articlePage/createArticleComment',
    async (comment, { extra, rejectWithValue, getState }) => {
        const userAuthData = selectUserAuthData(getState());
        const article = selectArticleData(getState());

        if (!userAuthData || !article) {
            return rejectWithValue('@@articlePage/createArticleComment: No data');
        }

        try {
            const { data } = await extra.api.post<Comment>('/articlesComments', {
                articleId: article.id,
                userId: userAuthData.id,
                text: comment,
            });

            return {
                id: data.id,
                text: comment,
                user: { username: userAuthData.username, avatar: userAuthData.avatar },
            };
        } catch (err) {
            return rejectWithValue(
                getErrorMessageAsyncThunk(err, CREATE_ARTICLE_COMMENT_ERROR_MESSAGE),
            );
        }
    },
);

export { createArticleComment, CREATE_ARTICLE_COMMENT_ERROR_MESSAGE };
