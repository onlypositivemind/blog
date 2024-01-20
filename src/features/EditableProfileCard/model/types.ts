import { Profile } from '@/entities/Profile';
import { ProfileValidationError } from './consts';

export interface EditableProfileCardSchema {
    isLoading: boolean;
    isReadonly: boolean;
    data?: Profile;
    form?: Profile;
    errorMessage?: string;
    validationErrors?: ValidateProfileErrors;
}

export type ValidateProfileErrors = ValueOf<typeof ProfileValidationError>[];
