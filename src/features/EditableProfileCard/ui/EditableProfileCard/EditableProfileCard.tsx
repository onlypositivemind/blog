import cn from 'classnames';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import type { Country } from '@/entities/Country';
import type { Currency } from '@/entities/Currency';
import { ProfileCard } from '@/entities/Profile';
import { I18nNamespace } from '@/shared/consts';
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/components';
import { useAppDispatch, useAppEffect } from '@/shared/lib/hooks';
import { VStack } from '@/shared/ui';
import { getProfile } from '../../api/getProfile';
import { UPDATE_PROFILE_ERROR_MESSAGE } from '../../api/updateProfile';
import {
    selectEditableProfileCardData,
    selectEditableProfileCardErrorMessage,
    selectEditableProfileCardFormData,
    selectEditableProfileCardIsLoading,
    selectEditableProfileCardIsNonExistentProfile,
    selectEditableProfileCardIsReadonly,
    selectEditableProfileCardValidationErrors,
} from '../../model/selectors';
import { editableProfileCardActions, editableProfileCardReducer } from '../../model/slice';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { EditableProfileCardHeaderSkeleton } from '../EditableProfileCardHeader/EditableProfileCardHeaderSkeleton';
import { NotFoundProfile } from '../NotFoundProfile/NotFoundProfile';
import s from './EditableProfileCard.module.scss';

interface EditableProfileCardProps {
    username: string;
    className?: string;
}

const EditableProfileCardComponent = ({ username, className }: EditableProfileCardProps) => {
    const { t } = useTranslation(I18nNamespace.PROFILE);
    const dispatch = useAppDispatch();
    const profileData = useSelector(selectEditableProfileCardData);
    const profileFormData = useSelector(selectEditableProfileCardFormData);
    const isLoading = useSelector(selectEditableProfileCardIsLoading);
    const isReadonly = useSelector(selectEditableProfileCardIsReadonly);
    const errorMessage = useSelector(selectEditableProfileCardErrorMessage);
    const validationErrors = useSelector(selectEditableProfileCardValidationErrors);
    const isNonExistentProfile = useSelector(selectEditableProfileCardIsNonExistentProfile);

    const handleChangeEmail = useCallback((email: string) => {
        dispatch(editableProfileCardActions.updateProfile({ email }));
    }, []);

    const handleChangeUsername = useCallback((username: string) => {
        dispatch(editableProfileCardActions.updateProfile({ username }));
    }, []);

    const handleChangeAvatar = useCallback((avatar: string) => {
        dispatch(editableProfileCardActions.updateProfile({ avatar }));
    }, []);

    const handleChangeFirstname = useCallback((firstname: string) => {
        dispatch(editableProfileCardActions.updateProfile({ firstname }));
    }, []);

    const handleChangeLastname = useCallback((lastname: string) => {
        dispatch(editableProfileCardActions.updateProfile({ lastname }));
    }, []);

    const handleChangeAge = useCallback((age: string) => {
        dispatch(editableProfileCardActions.updateProfile({ age: +age }));
    }, []);

    const handleChangeCountry = useCallback((country: Country) => {
        dispatch(editableProfileCardActions.updateProfile({ country }));
    }, []);

    const handleChangeCurrency = useCallback((currency: Currency) => {
        dispatch(editableProfileCardActions.updateProfile({ currency }));
    }, []);

    useAppEffect(() => {
        dispatch(getProfile(username));
    }, [username]);

    if (errorMessage && errorMessage !== UPDATE_PROFILE_ERROR_MESSAGE) {
        return <p className={s.errText}>{t(errorMessage)}</p>;
    }

    if (isNonExistentProfile) {
        return <NotFoundProfile />;
    }

    return (
        <VStack as='article' gap={24} className={cn(s.cardWrapper, className)}>
            {errorMessage && <p className={s.errText}>{t(errorMessage)}</p>}
            {isLoading ? (
                <EditableProfileCardHeaderSkeleton />
            ) : (
                <EditableProfileCardHeader
                    username={profileData?.username}
                    avatar={profileData?.avatar}
                    isReadonly={isReadonly}
                />
            )}
            {validationErrors && (
                <ul className={s.validationErrors}>
                    {validationErrors.map((err) => (
                        <li key={err} className={s.errText}>
                            {t(err)}
                        </li>
                    ))}
                </ul>
            )}
            <ProfileCard
                data={profileFormData}
                isLoading={isLoading}
                isReadonly={isReadonly}
                onChangeEmail={handleChangeEmail}
                onChangeUsername={handleChangeUsername}
                onChangeAvatar={handleChangeAvatar}
                onChangeFirstname={handleChangeFirstname}
                onChangeLastname={handleChangeLastname}
                onChangeAge={handleChangeAge}
                onChangeCountry={handleChangeCountry}
                onChangeCurrency={handleChangeCurrency}
            />
        </VStack>
    );
};

const reducers: ReducersList = { editableProfileCard: editableProfileCardReducer };

export const EditableProfileCard = (props: EditableProfileCardProps) => (
    <DynamicModuleLoader reducers={reducers}>
        <EditableProfileCardComponent {...props} />
    </DynamicModuleLoader>
);
