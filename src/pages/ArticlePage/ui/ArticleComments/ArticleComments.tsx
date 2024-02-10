import { useSelector } from 'react-redux';
import { CommentList } from '@/entities/Comment';
import { useAppDispatch, useAppEffect } from '@/shared/lib/hooks';
import { VStack } from '@/shared/ui';
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

    useAppEffect(() => {
        dispatch(getArticleComments(articleId));
    }, [articleId]);

    return (
        <VStack>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <p>Comments</p>
            <CommentList comments={comments} isLoading={isLoading} />
        </VStack>
    );
};
