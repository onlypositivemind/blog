import cn from 'classnames';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileCard } from '@/entities/Profile';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components';
import { useAppDispatch } from '@/shared/lib/hooks';
import { VStack } from '@/shared/ui';
import {
    selectProfileCardData,
    selectProfileCardErrorMessage,
    selectProfileCardFormData,
    selectProfileCardIsLoading,
    selectProfileCardIsReadonly,
} from '../../model/selectors/profileCardSelectors';
import { getProfileData } from '../../model/services/getProfileData';
import { profileCardActions, profileCardReducer } from '../../model/slice/profileCard';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { EditableProfileCardHeaderSkeleton } from '../EditableProfileCardHeader/EditableProfileCardHeaderSkeleton';
import s from './EditableProfileCard.module.scss';

const reducers: ReducersList = { profileCard: profileCardReducer };

interface EditableProfileCardProps {
    id?: string;
    className?: string;
}

export const EditableProfileCard = ({ id, className }: EditableProfileCardProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const profileData = useSelector(selectProfileCardData);
    const profileFormData = useSelector(selectProfileCardFormData);
    const isLoading = useSelector(selectProfileCardIsLoading);
    const isReadonly = useSelector(selectProfileCardIsReadonly);
    const errorMessage = useSelector(selectProfileCardErrorMessage);

    useEffect(() => {
        id && dispatch(getProfileData(id));
    }, []);

    const handleChangeEmail = useCallback((email: string) => {
        dispatch(profileCardActions.updateProfile({ email }));
    }, []);

    const handleChangeUsername = useCallback((username: string) => {
        dispatch(profileCardActions.updateProfile({ username }));
    }, []);

    const handleChangeAvatar = useCallback((avatar: string) => {
        dispatch(profileCardActions.updateProfile({ avatar }));
    }, []);

    const handleChangeFirstname = useCallback((firstname: string) => {
        dispatch(profileCardActions.updateProfile({ firstname }));
    }, []);

    const handleChangeLastname = useCallback((lastname: string) => {
        dispatch(profileCardActions.updateProfile({ lastname }));
    }, []);

    const handleChangeAge = useCallback((age: string) => {
        dispatch(profileCardActions.updateProfile({ age: +age }));
    }, []);

    const handleChangeCountry = useCallback((country: Country) => {
        dispatch(profileCardActions.updateProfile({ country }));
    }, []);

    const handleChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileCardActions.updateProfile({ currency }));
    }, []);

    if (errorMessage) {
        return <p className={s.errorText}>{t('Failed to load profile data')}</p>;
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack gap={24} className={cn(s.cardWrapper, className)}>
                {isLoading ? (
                    <EditableProfileCardHeaderSkeleton />
                ) : (
                    <EditableProfileCardHeader
                        username={profileData?.username}
                        avatar={profileData?.avatar}
                        isReadonly={isReadonly}
                    />
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
        </DynamicModuleLoader>
    );
};
