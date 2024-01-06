import { ProfileValidationError } from '../const/profileValidation';

export type ValidateProfileErrors = ValueOf<typeof ProfileValidationError>[];
