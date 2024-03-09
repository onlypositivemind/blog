import type { User } from '@/entities/User';
import type { DateTimeUTC } from '@/shared/types';
import type { ArticleBlock } from './articleBlock';

// TODO вынести типы отдельно
export type ArticleAppearance = 'slab' | 'card';

export type ArticleCategory = 'IT' | 'economics' | 'science';

export interface Article {
    id: string;
    createdAt: DateTimeUTC;
    author: Pick<User, 'username' | 'avatar'>;
    title: string;
    subtitle: string;
    image: string;
    views: number;
    categories: ArticleCategory[];
    blocks: ArticleBlock[];
}
