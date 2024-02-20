import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { CommentList } from '@/entities/Comment';
import { CommentForm } from '@/features/CommentForm';
import { useAppDispatch, useAppEffect } from '@/shared/lib/hooks';
import { VStack } from '@/shared/ui';
import { createArticleComment } from '../../api/createArticleComment';
import { getArticleComments } from '../../api/getArticleComments';
import {
    selectArticlePageComments,
    selectArticlePageCommentsErrorMessage,
    selectArticlePageCommentsIsLoading,
} from '../../model/selectors';

interface ArticleCommentsProps {
    articleId: string;
}

export const ArticleComments = ({ articleId }: ArticleCommentsProps) => {
    const dispatch = useAppDispatch();
    const comments = useSelector(selectArticlePageComments.selectAll);
    const isLoading = useSelector(selectArticlePageCommentsIsLoading);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errorMessage = useSelector(selectArticlePageCommentsErrorMessage);

    const handleSendComment = useCallback((comment: string) => {
        dispatch(createArticleComment(comment));
    }, []);

    useAppEffect(() => {
        dispatch(getArticleComments(articleId));
    }, [articleId]);

    return (
        <VStack>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <p>Your comment</p>
            {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
            <CommentForm onSendComment={handleSendComment} />
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <p>Comments</p>
            <CommentList comments={comments} isLoading={isLoading} />
        </VStack>
    );
};
