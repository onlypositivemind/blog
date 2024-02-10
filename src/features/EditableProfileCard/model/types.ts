import type { Profile } from '@/entities/Profile';
import type { ProfileValidationError } from './consts';

export interface EditableProfileCardSchema {
    isLoading: boolean;
    isReadonly: boolean;
    data?: Profile;
    form?: Profile;
    isNonExistentProfile?: boolean;
    errorMessage?: string;
    validationErrors?: ValidateProfileErrors;
}

export type ValidateProfileErrors = ValueOf<typeof ProfileValidationError>[];
