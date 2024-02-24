import type { Profile } from '@/entities/Profile';
import mockAvatar from '../../../assets/tests/mockAvatar.jpg';

const sbProfileMock: Profile = {
    id: '1',
    email: 'admin@gmail.com',
    username: 'admin',
    firstname: 'Evgenii',
    lastname: 'TSovich',
    age: 24,
    currency: 'EUR',
    country: 'Russia',
    avatar: mockAvatar,
};

export { sbProfileMock };
