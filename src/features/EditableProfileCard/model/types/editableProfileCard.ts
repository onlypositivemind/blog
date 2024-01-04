import { Profile } from '@/entities/Profile';
import { ValidateProfileErrors } from '../types/validateProfile';

export interface EditableProfileCardSchema {
    isLoading: boolean;
    isReadonly: boolean;
    data?: Profile;
    form?: Profile;
    errorMessage?: string;
    validationErrors?: ValidateProfileErrors;
}
