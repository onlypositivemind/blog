import cn from 'classnames';
import { Avatar, HStack } from '@/shared/ui';
import type { Comment } from '../../model/types';
import s from './CommentCard.module.scss';

interface CommentCardProps extends Pick<Comment, 'text' | 'user'> {
    isLoading?: boolean;
    className?: string;
}

export const CommentCard = ({ text, user, isLoading, className }: CommentCardProps) => {
    if (isLoading) {
        // eslint-disable-next-line i18next/no-literal-string
        return <p>Comment loading...</p>;
    }

    return (
        <div className={cn(s.card, className)}>
            <HStack align='center' gap={8} className='mb-3'>
                <Avatar size={40} src={user.avatar} />
                <span>{user.username}</span>
            </HStack>
            <p>{text}</p>
        </div>
    );
};
