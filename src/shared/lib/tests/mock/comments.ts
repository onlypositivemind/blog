import type { EntityState } from '@reduxjs/toolkit';
import type { Comment } from '@/entities/Comment';

const commentMock: Comment = {
    id: 999,
    createdAt: '2222-02-22T00:00:00.000Z',
    author: { username: 'moder' },
    text: 'Some comment',
};

const commentsMock: Comment[] = [
    {
        id: 999,
        createdAt: '2222-02-22T00:00:00.000Z',
        author: { username: 'moder' },
        text: 'Some comment',
    },
    {
        id: 1000,
        createdAt: '2222-02-22T00:00:00.000Z',
        author: { username: 'admin' },
        text: 'Some comment',
    },
];

const articlePageCommentsEntityAdapterMock: EntityState<Comment> = {
    ids: [2, 1],
    entities: {
        1: {
            id: 1,
            createdAt: '2222-02-22T00:00:00.000Z',
            author: { username: 'admin' },
            text: 'Comment 1',
        },
        2: {
            id: 2,
            createdAt: '2222-02-22T00:00:00.000Z',
            author: { username: 'tester' },
            text: 'Comment 2',
        },
    },
};

export { commentMock, commentsMock, articlePageCommentsEntityAdapterMock };
