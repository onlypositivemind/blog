import { Profile } from '@/entities/Profile';

export const mockProfileData: Profile = {
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

export const mockInvalidProfileData: Profile = {
    email: 'invalid-email',
    username: 'ab',
    avatar: 'invalid-avatar-link',
    firstname: '123',
    lastname: '',
    age: 15,
};
