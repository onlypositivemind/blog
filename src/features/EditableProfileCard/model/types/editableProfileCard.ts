import { Profile } from '@/entities/Profile';

export interface EditableProfileCardSchema {
    isLoading: boolean;
    isReadonly: boolean;
    data?: Profile;
    form?: Profile;
    errorMessage?: string;
}
