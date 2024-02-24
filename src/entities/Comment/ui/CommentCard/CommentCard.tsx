import cn from 'classnames';
import { getRouteProfile } from '@/shared/consts';
import { AppLink, Avatar } from '@/shared/ui';
import type { Comment } from '../../model/types';
import { CommentCardSkeleton } from './CommentCardSkeleton';
import s from './CommentCard.module.scss';

interface CommentCardProps extends Pick<Comment, 'text' | 'user'> {
    isLoading?: boolean;
    className?: string;
}

export const CommentCard = ({ text, user, isLoading, className }: CommentCardProps) => {
    if (isLoading) {
        return <CommentCardSkeleton />;
    }

    return (
        <div className={cn(s.card, className)}>
            <AppLink to={getRouteProfile(user.username)} className={s.profileLink}>
                <Avatar size={40} src={user.avatar} />
                <span>{user.username}</span>
            </AppLink>
            <p className={s.comment}>{text}</p>
        </div>
    );
};
