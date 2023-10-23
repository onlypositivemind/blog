import { Profile } from '@/entities/Profile';

export interface ProfileCardSchema {
    isLoading: boolean;
    isReadonly: boolean;
    data?: Profile;
    errorMessage?: string;
}
