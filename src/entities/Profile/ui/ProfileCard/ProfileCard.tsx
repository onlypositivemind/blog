import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { Country, CountrySelect } from '@/entities/Country';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { I18nNamespace } from '@/shared/const';
import { Input, VStack } from '@/shared/ui';
import { Profile } from '../../model/types/profile';
import { ProfileCardSkeleton } from './ProfileCardSkeleton';
import s from './ProfileCard.module.scss';

interface ProfileCardProps {
    data?: Profile;
    isLoading?: boolean;
    isReadonly?: boolean;
    errorMessage?: string;
    onChangeEmail?: (val: string) => void;
    onChangeUsername?: (val: string) => void;
    onChangeAvatar?: (val: string) => void;
    onChangeFirstname?: (val: string) => void;
    onChangeLastname?: (val: string) => void;
    onChangeAge?: (val: string) => void;
    onChangeCountry?: (val: Country) => void;
    onChangeCurrency?: (val: Currency) => void;
    className?: string;
}

export const ProfileCard = ({
    data,
    isLoading,
    isReadonly,
    errorMessage,
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

    if (errorMessage) {
        return <p className={s.errorText}>{t('Failed to load profile data')}</p>;
    }

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
