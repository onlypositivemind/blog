export type UserRole = 'SystemAdmin' | 'Moderator';

export interface User {
    id: string;
    email: string;
    username: string;
    roles: UserRole[];
    avatar?: string;
}

export interface UserSchema {
    _inited: boolean;
    authData?: User;
}
