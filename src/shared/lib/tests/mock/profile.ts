import type { Profile } from '@/entities/Profile';

const profileMock: Profile = {
    id: '1',
    email: 'admin@gmail.com',
    username: 'admin',
    firstname: 'Evgenii',
    lastname: 'TSovich',
    age: 24,
    currency: 'EUR',
    country: 'Russia',
    avatar: 'https://avatars.githubusercontent.com/u/109303573?v=4',
};

const invalidProfileMock: Profile = {
    email: 'invalid-email',
    username: 'ab',
    avatar: 'invalid-avatar-link',
    firstname: '123',
    lastname: '',
    age: 15,
};

export { profileMock, invalidProfileMock };
