import { User } from '@/entities/User';

export interface AuthResponse {
    tokens: {
        accessToken: string;
        refreshToken: string;
    };
    user: User;
}
