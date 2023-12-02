import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { I18nNamespace } from '@/shared/const';
import { useAppDispatch } from '@/shared/lib/hooks';
import { Avatar, Button, HStack, VStack } from '@/shared/ui';
import { updateProfile } from '../../model/services/updateProfile';
import { editableProfileCardActions } from '../../model/slice/editableProfileCard';
import UserIcon from '@/shared/assets/icons/user.svg';
import s from './EditableProfileCardHeader.module.scss';

interface EditableProfileCardHeaderProps {
    username?: string;
    avatar?: string;
    isReadonly?: boolean;
}

export const EditableProfileCardHeader = ({
    username,
    avatar,
    isReadonly,
}: EditableProfileCardHeaderProps) => {
    const { t } = useTranslation(I18nNamespace.PROFILE);
    const dispatch = useAppDispatch();

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
                    <UserIcon className={s.userIcon} />
                    <p>{username}</p>
                </HStack>
            </VStack>
            <div className={s.buttons}>
                {isReadonly ? (
                    <Button theme='primary' size='size_p3' onClick={handleClickEdit}>
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
        </HStack>
    );
};
