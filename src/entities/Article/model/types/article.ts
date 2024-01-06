import { ArticleBlock } from './articleBlock';
import { ArticleCategory } from './articleCategory';

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    views: number;
    createdAt: string;
    categories: ArticleCategory[];
    blocks: ArticleBlock[];
}
