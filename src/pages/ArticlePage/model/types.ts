import type { EntityState } from '@reduxjs/toolkit';
import type { Comment } from '@/entities/Comment';

interface ArticlePageCommentsSchema extends EntityState<Comment> {
    isCommentsLoading: boolean;
    isCreateCommentLoading: boolean;
    commentsErrorMessage?: string;
    createCommentErrorMessage?: string;
}

interface ArticlePageSchema {
    comments: ArticlePageCommentsSchema;
}

export type { ArticlePageCommentsSchema, ArticlePageSchema };
