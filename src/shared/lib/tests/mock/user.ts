import type { User } from '@/entities/User';

const userAuthDataMock: User = {
    id: '1',
    username: 'admin',
    email: 'admin@gmail.com',
    roles: ['SystemAdmin'],
};

export { userAuthDataMock };
