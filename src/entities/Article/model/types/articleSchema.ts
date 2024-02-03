import type { Article } from './article';

export interface ArticleSchema {
    isLoading: boolean;
    data?: Article;
    errorMessage?: string;
}
