type UserRole = 'SystemAdmin' | 'Moderator';

interface User {
    id: string;
    email: string;
    username: string;
    roles: UserRole[];
    avatar?: string;
}

interface UserSchema {
    _inited: boolean;
    authData?: User;
}

export type { UserRole, User, UserSchema };
