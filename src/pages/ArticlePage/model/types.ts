import type { EntityState } from '@reduxjs/toolkit';
import type { Comment } from '@/entities/Comment';

interface ArticlePageCommentsSchema extends EntityState<Comment> {
    isLoading: boolean;
    errorMessage?: string;
}

interface ArticlePageSchema {
    comments: ArticlePageCommentsSchema;
}

export type { ArticlePageCommentsSchema, ArticlePageSchema };
