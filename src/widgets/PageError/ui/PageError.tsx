import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui';
import s from './PageError.module.scss';

export const PageError = () => {
    const { t } = useTranslation();

    const handleReload = () => {
        window.location.reload();
    };

    return (
        <div className={s.pageError}>
            <p>{t('PageErrorTitle')}</p>
            <Button onClick={handleReload} theme='blue'>
                {t('Reload')}
            </Button>
        </div>
    );
};
