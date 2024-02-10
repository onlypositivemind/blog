import type { EntityState } from '@reduxjs/toolkit';
import type { Comment } from '@/entities/Comment';

export interface ArticlePageCommentsSchema extends EntityState<Comment> {
    isLoading: boolean;
    errorMessage?: string;
}

export interface ArticlePageSchema {
    comments: ArticlePageCommentsSchema;
}
