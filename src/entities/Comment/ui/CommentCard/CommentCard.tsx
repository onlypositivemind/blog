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
        <div className={cn(s.card, className)}>
            <HStack align='center' gap={4} className='mb-3'>
                <AppLink to={getRouteProfile(user.username)} className={s.profileLink}>
                    <Avatar size={40} src={user.avatar} />
                    <span>{user.username}</span>
                </AppLink>
                {createdAt && (
                    <span className={s.date}>
                        {dateTimeFormat({
                            date: createdAt,
                            lang: currentLanguage,
                            options: DateTimeFormatOptions.FULL_LONG,
                        })}
                    </span>
                )}
            </HStack>
            <p className={s.comment}>{text}</p>
        </div>
    );
};
