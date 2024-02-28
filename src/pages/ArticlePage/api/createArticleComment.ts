import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider';
import { selectArticleData } from '@/entities/Article';
import type { Comment } from '@/entities/Comment';
import { selectUser } from '@/entities/User';
import { getErrorMessageAsyncThunk } from '@/shared/lib/utils';

interface CreateArticleCommentProps {
    comment: string;
    resetComment?: () => void;
}

const CREATE_ARTICLE_COMMENT_ERROR_MESSAGE = 'CreateCommentServiceError';
const CREATE_ARTICLE_COMMENT_NO_DATA_ERROR_MESSAGE = 'NoDataForCreateComment';

const createArticleComment = createAsyncThunk<
    Comment,
    CreateArticleCommentProps,
    ThunkConfig<string>
>('articlePage/createArticleComment', async (props, { extra, rejectWithValue, getState }) => {
    const userAuthData = selectUser(getState());
    const article = selectArticleData(getState());

    if (!userAuthData || !article) {
        return rejectWithValue(CREATE_ARTICLE_COMMENT_NO_DATA_ERROR_MESSAGE);
    }

    try {
        const { data } = await extra.api.post<Comment>('/articlesComments', {
            articleId: article.id,
            userId: userAuthData.id,
            text: props.comment,
            createdAt: new Date(),
        });

        props.resetComment?.();

        return {
            id: data.id,
            createdAt: data.createdAt,
            text: props.comment,
            user: { username: userAuthData.username, avatar: userAuthData.avatar },
        };
    } catch (err) {
        return rejectWithValue(
            getErrorMessageAsyncThunk(err, CREATE_ARTICLE_COMMENT_ERROR_MESSAGE),
        );
    }
});

export {
    CREATE_ARTICLE_COMMENT_ERROR_MESSAGE,
    CREATE_ARTICLE_COMMENT_NO_DATA_ERROR_MESSAGE,
    createArticleComment,
};
