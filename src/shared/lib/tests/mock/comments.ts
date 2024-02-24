import type { EntityState } from '@reduxjs/toolkit';
import type { Comment } from '@/entities/Comment';

const commentMock: Comment = { id: 999, text: 'Some comment', user: { username: 'moder' } };

const commentsMock: Comment[] = [
    { id: 999, text: 'Some comment', user: { username: 'moder' } },
    { id: 1000, text: 'Some comment', user: { username: 'admin' } },
];

const articlePageCommentsEntityAdapterMock: EntityState<Comment> = {
    ids: [2, 1],
    entities: {
        1: { id: 1, text: 'Comment 1', user: { username: 'admin' } },
        2: { id: 2, text: 'Comment 2', user: { username: 'tester' } },
    },
};

export { commentMock, commentsMock, articlePageCommentsEntityAdapterMock };
