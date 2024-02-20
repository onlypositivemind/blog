import cn from 'classnames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import type { Country } from '@/entities/Country';
import { CountrySelect } from '@/entities/Country';
import type { Currency } from '@/entities/Currency';
import { CurrencySelect } from '@/entities/Currency';
import { I18nNamespace } from '@/shared/consts';
import { Input, VStack } from '@/shared/ui';
import type { Profile } from '../model/types';
import { ProfileCardSkeleton } from './ProfileCardSkeleton';
import s from './ProfileCard.module.scss';

interface ProfileCardProps {
    data?: Profile;
    isLoading?: boolean;
    isReadonly?: boolean;
    onChangeEmail?: (email: string) => void;
    onChangeUsername?: (username: string) => void;
    onChangeAvatar?: (avatar: string) => void;
    onChangeFirstname?: (firstname: string) => void;
    onChangeLastname?: (lastname: string) => void;
    onChangeAge?: (age: string) => void;
    onChangeCountry?: (country: Country) => void;
    onChangeCurrency?: (currency: Currency) => void;
    className?: string;
}

const ProfileCardComponent = ({
    data,
    isLoading,
    isReadonly = true,
    onChangeEmail,
    onChangeUsername,
    onChangeAvatar,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCountry,
    onChangeCurrency,
    className,
}: ProfileCardProps) => {
    const { t } = useTranslation(I18nNamespace.PROFILE);

    if (isLoading) {
        return (
            <div className={s.profileCard}>
                <ProfileCardSkeleton />
            </div>
        );
    }

    return (
        <VStack align='center' gap={16} className={cn(className, { [s.editing]: !isReadonly })}>
            <div className={s.fieldBlock}>
                <p>{t('Email')}</p>
                <Input
                    type='email'
                    value={data?.email}
                    onChange={onChangeEmail}
                    readOnly={isReadonly}
                />
            </div>
            <div className={s.fieldBlock}>
                <p>{t('Username')}</p>
                <Input value={data?.username} onChange={onChangeUsername} readOnly={isReadonly} />
            </div>
            <div className={s.fieldBlock}>
                <p>{t('Avatar')}</p>
                <Input
                    type='url'
                    value={data?.avatar}
                    onChange={onChangeAvatar}
                    readOnly={isReadonly}
                />
            </div>
            <div className={s.fieldBlock}>
                <p>{t('Firstname')}</p>
                <Input value={data?.firstname} onChange={onChangeFirstname} readOnly={isReadonly} />
            </div>
            <div className={s.fieldBlock}>
                <p>{t('Surname')}</p>
                <Input value={data?.lastname} onChange={onChangeLastname} readOnly={isReadonly} />
            </div>
            <div className={s.fieldBlock}>
                <p>{t('Age')}</p>
                <Input
                    type='number'
                    value={data?.age}
                    onChange={onChangeAge}
                    readOnly={isReadonly}
                />
            </div>
            <div className={s.fieldBlock}>
                <p>{t('Country')}</p>
                <CountrySelect
                    value={data?.country}
                    onChange={onChangeCountry}
                    disabled={isReadonly}
                />
            </div>
            <div className={s.fieldBlock}>
                <p>{t('Currency')}</p>
                <CurrencySelect
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    disabled={isReadonly}
                />
            </div>
        </VStack>
    );
};

export const ProfileCard = memo(ProfileCardComponent);
