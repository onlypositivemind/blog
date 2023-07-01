import { useTranslation } from 'react-i18next';
import s from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
    const { t } = useTranslation();

    return (
        <div className={s.notFoundPage}>
            <p className={s.title}>{t('NotFoundPageTitle')}</p>
            <p className={s.text}>{t('NotFoundPageText')}</p>
        </div>
    );
};
