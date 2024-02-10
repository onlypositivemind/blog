import { CommentCard } from '@/entities/Comment';
import { VStack } from '@/shared/ui';
import type { Comment } from '../../model/types';

interface CommentListProps {
    comments: Comment[];
    isLoading?: boolean;
    className?: string;
}

export const CommentList = ({ comments, isLoading, className }: CommentListProps) => {
    if (isLoading) {
        // eslint-disable-next-line i18next/no-literal-string
        return <p>Loading comments...</p>;
    }

    return (
        <VStack gap={24} className={className}>
            {comments.length > 0 ? (
                comments.map(({ id, text, user }) => (
                    <CommentCard key={id} text={text} user={user} />
                ))
            ) : (
                // eslint-disable-next-line i18next/no-literal-string
                <p>Oops, no comments :(</p>
            )}
        </VStack>
    );
};
