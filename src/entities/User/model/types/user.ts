export type UserRole = 'SystemAdmin' | 'Moderator';

export interface User {
    id: number;
    email: string;
    username: string;
    roles: UserRole[];
}

export interface UserSchema {
    _inited: boolean;
    authData?: User;
}
