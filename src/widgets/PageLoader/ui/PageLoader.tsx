import { Spin } from '@/shared/ui';
import s from './PageLoader.module.scss';

export const PageLoader = () => (
    <div className={s.wrapper}>
        <Spin />
    </div>
);
