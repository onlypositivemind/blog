import type { User } from '@/entities/User';

interface AuthResponse {
    accessToken: string;
    user: User;
}

export type { AuthResponse };
