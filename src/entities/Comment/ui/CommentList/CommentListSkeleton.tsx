import { CommentCardSkeleton } from '../CommentCard/CommentCardSkeleton';

interface CommentListSkeletonProps {
    commentsQty?: number;
}

export const CommentListSkeleton = ({ commentsQty = 3 }: CommentListSkeletonProps) => (
    <>
        {Array.from({ length: commentsQty }).map((_, i) => (
            <CommentCardSkeleton key={i} />
        ))}
    </>
);
