import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { CommentList } from '@/entities/Comment';
import { CommentForm } from '@/features/CommentForm';
import { useAppDispatch, useAppEffect } from '@/shared/lib/hooks';
import { createArticleComment } from '../../api/createArticleComment';
import { getArticleComments } from '../../api/getArticleComments';
import {
    selectArticlePageComments,
    selectArticlePageCommentsCreateCommentErrorMessage,
    selectArticlePageCommentsErrorMessage,
    selectArticlePageCommentsIsCommentsLoading,
    selectArticlePageCommentsIsCreateCommentLoading,
} from '../../model/selectors';

interface ArticleCommentsProps {
    articleId: string;
}

export const ArticleComments = ({ articleId }: ArticleCommentsProps) => {
    const dispatch = useAppDispatch();
    const comments = useSelector(selectArticlePageComments.selectAll);
    const isCommentsLoading = useSelector(selectArticlePageCommentsIsCommentsLoading);
    const isCreateCommentLoading = useSelector(selectArticlePageCommentsIsCreateCommentLoading);
    const commentsErrorMessage = useSelector(selectArticlePageCommentsErrorMessage);
    const createCommentErrorMessage = useSelector(
        selectArticlePageCommentsCreateCommentErrorMessage,
    );

    const handleSendComment = useCallback((comment: string, resetComment?: () => void) => {
        dispatch(createArticleComment({ comment, resetComment }));
    }, []);

    useAppEffect(() => {
        dispatch(getArticleComments(articleId));
    }, [articleId]);

    return (
        <div>
            <CommentForm
                onSendComment={handleSendComment}
                isLoading={isCommentsLoading}
                disabled={isCreateCommentLoading}
                errorMessage={createCommentErrorMessage}
                className='mb-6'
            />
            <CommentList
                comments={comments}
                isLoading={isCommentsLoading}
                isNewCommentLoading={isCreateCommentLoading}
                errorMessage={commentsErrorMessage}
            />
        </div>
    );
};
