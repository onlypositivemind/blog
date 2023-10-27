import { useTranslation } from 'react-i18next';
import { VStack } from '@/shared/ui';
import s from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
    const { t } = useTranslation();

    return (
        <VStack align='center' justify='center' gap={20} className={s.notFoundPage}>
            <p className={s.title}>{t('NotFoundPageTitle')}</p>
            <p className={s.text}>{t('NotFoundPageText')}</p>
        </VStack>
    );
};
