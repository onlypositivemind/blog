import { useTranslation } from 'react-i18next';
import { Button, VStack } from '@/shared/ui';
import s from './PageError.module.scss';

export const PageError = () => {
    const { t } = useTranslation();

    const handleReload = () => {
        window.location.reload();
    };

    return (
        <VStack align='center' justify='center' gap={20} className={s.pageError}>
            <p>{t('PageErrorTitle')}</p>
            <Button onClick={handleReload} theme='blue'>
                {t('Reload')}
            </Button>
        </VStack>
    );
};
