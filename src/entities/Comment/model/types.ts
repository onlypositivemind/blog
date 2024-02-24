import type { User } from '@/entities/User';

export interface Comment {
    id: number;
    text: string;
    user: Pick<User, 'username' | 'avatar'>;
}
