import { Profile } from '@/entities/Profile';

export interface ProfileCardSchema {
    isLoading: boolean;
    isReadonly: boolean;
    data?: Profile;
    form?: Profile;
    errorMessage?: string;
}
