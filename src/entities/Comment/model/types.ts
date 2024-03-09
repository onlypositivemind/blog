import type { User } from '@/entities/User';
import type { DateTimeUTC } from '@/shared/types';

export interface Comment {
    id: number;
    createdAt: DateTimeUTC;
    author: Pick<User, 'username' | 'avatar'>;
    text: string;
}
