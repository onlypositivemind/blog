import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { I18nNamespace } from '@/shared/consts';
import { HStack, VStack } from '@/shared/ui';
import type { Comment } from '../../model/types';
import { CommentCard } from '../CommentCard/CommentCard';
import { CommentCardSkeleton } from '../CommentCard/CommentCardSkeleton';
import { CommentListSkeleton } from './CommentListSkeleton';
import s from './CommentList.style.module.scss';

interface CommentListProps {
    comments: Comment[];
    isLoading?: boolean;
    isNewCommentLoading?: boolean;
    errorMessage?: string;
    className?: string;
}

export const CommentList = ({
    comments,
    isLoading,
    isNewCommentLoading,
    errorMessage,
    className,
}: CommentListProps) => {
    const { t } = useTranslation(I18nNamespace.COMMENTS);

    const isCommentsExist = useMemo(() => comments.length > 0, [comments.length]);

    if (errorMessage) {
        return (
            <VStack className={className}>
                <p className={s.title}>{t('CommentListTitle')}</p>
                <p className={s.errorMessage}>{t(errorMessage)}</p>
            </VStack>
        );
    }

    return (
        <div className={className}>
            <HStack align='center' gap={8} className='mb-3'>
                <p className={s.title}>{t('CommentListTitle')}</p>
                {isLoading
                    ? null
                    : isCommentsExist && <p className={s.commentsQty}>{comments.length}</p>}
            </HStack>
            <VStack gap={24}>
                {isNewCommentLoading && <CommentCardSkeleton />}
                {isLoading ? (
                    <CommentListSkeleton />
                ) : isCommentsExist ? (
                    comments.map(({ id, text, user }) => (
                        <CommentCard key={id} text={text} user={user} />
                    ))
                ) : (
                    <p className={s.empty}>{t('EmptyCommentList')}</p>
                )}
            </VStack>
        </div>
    );
};
