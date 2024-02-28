import type { DateTimeUTC } from '@/shared/types';
import type { ArticleBlock } from './articleBlock';
import type { ArticleCategory } from './articleCategory';

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    views: number;
    createdAt: DateTimeUTC;
    categories: ArticleCategory[];
    blocks: ArticleBlock[];
}
