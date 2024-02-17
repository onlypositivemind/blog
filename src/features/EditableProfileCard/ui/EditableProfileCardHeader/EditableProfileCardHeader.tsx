import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectUserAuthData } from '@/entities/User';
import { I18nNamespace } from '@/shared/consts';
import { useAppDispatch } from '@/shared/lib/hooks';
import { AppIcon, Avatar, Button, HStack, VStack } from '@/shared/ui';
import { updateProfile } from '../../api/updateProfile';
import { editableProfileCardActions } from '../../model/slice';
import UserIcon from '@/shared/assets/icons/user.svg';
import s from './EditableProfileCardHeader.module.scss';

interface EditableProfileCardHeaderProps {
    username?: string;
    avatar?: string;
    isReadonly?: boolean;
}

const EditableProfileCardHeaderComponent = ({
    username,
    avatar,
    isReadonly,
}: EditableProfileCardHeaderProps) => {
    const { t } = useTranslation(I18nNamespace.PROFILE);
    const dispatch = useAppDispatch();
    const authData = useSelector(selectUserAuthData);

    const hasEdit = useMemo(() => authData && authData.username === username, [authData, username]);

    const handleClickEdit = useCallback(() => {
        dispatch(editableProfileCardActions.setReadonly(false));
    }, []);

    const handleClickCancel = useCallback(() => {
        dispatch(editableProfileCardActions.cancelEdit());
    }, []);

    const handleClickSave = useCallback(() => {
        dispatch(updateProfile());
    }, []);

    return (
        <HStack justify='center' gap={12} className={s.cardHeader}>
            <VStack align='center' gap={8}>
                <Avatar src={avatar} size={100} className={s.avatar} />
                <HStack align='center' gap={4}>
                    <AppIcon Icon={UserIcon} size='m' />
                    <p>{username}</p>
                </HStack>
            </VStack>
            {hasEdit && (
                <div className={s.buttons}>
                    {isReadonly ? (
                        <Button theme='primary' onClick={handleClickEdit}>
                            {t('Edit')}
                        </Button>
                    ) : (
                        <HStack align='center' gap={8}>
                            <Button theme='blue' onClick={handleClickSave}>
                                {t('Save')}
                            </Button>
                            <Button theme='red' onClick={handleClickCancel}>
                                {t('Cancel')}
                            </Button>
                        </HStack>
                    )}
                </div>
            )}
        </HStack>
    );
};

export const EditableProfileCardHeader = memo(EditableProfileCardHeaderComponent);
