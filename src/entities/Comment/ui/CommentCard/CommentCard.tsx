import cn from 'classnames';
import { DateTimeFormatOptions, getRouteProfile } from '@/shared/consts';
import { useLanguage } from '@/shared/lib/hooks';
import { dateTimeFormat } from '@/shared/lib/utils';
import { AppLink, Avatar, HStack } from '@/shared/ui';
import type { Comment } from '../../model/types';
import { CommentCardSkeleton } from './CommentCardSkeleton';
import s from './CommentCard.module.scss';

interface CommentCardProps extends Omit<Comment, 'id'> {
    isLoading?: boolean;
    className?: string;
}

export const CommentCard = ({ createdAt, text, user, isLoading, className }: CommentCardProps) => {
    const { currentLanguage } = useLanguage();

    if (isLoading) {
        return <CommentCardSkeleton />;
    }

    return (
        <article className={cn(s.card, className)}>
            <HStack as='header' align='center' gap={4} className='mb-3'>
                <AppLink to={getRouteProfile(user.username)} className={s.profileLink}>
                    <Avatar
                        size={40}
                        src={user.avatar}
                        alt={`Avatar of the ${user.username} user`}
                    />
                    <span>{user.username}</span>
                </AppLink>
                {createdAt && (
                    <time dateTime={createdAt} className={s.date}>
                        {dateTimeFormat({
                            date: createdAt,
                            lang: currentLanguage,
                            options: DateTimeFormatOptions.FULL_LONG,
                        })}
                    </time>
                )}
            </HStack>
            <p className={s.comment}>{text}</p>
        </article>
    );
};
