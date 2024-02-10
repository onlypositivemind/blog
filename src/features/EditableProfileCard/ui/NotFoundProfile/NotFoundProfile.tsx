import { useTranslation } from 'react-i18next';
import { I18nNamespace } from '@/shared/consts';
import { VStack } from '@/shared/ui';
import s from './NotFoundProfile.styles.module.scss';

export const NotFoundProfile = () => {
    const { t } = useTranslation(I18nNamespace.PROFILE);

    return (
        <VStack gap={8} align='center' justify='center' className={s.wrapper}>
            <p className={s.title}>404</p>
            <p>{t('NonExistentProfile')}</p>
        </VStack>
    );
};
