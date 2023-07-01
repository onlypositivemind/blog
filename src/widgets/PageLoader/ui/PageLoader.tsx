import { memo } from 'react';
import { Spin } from '@/shared/ui';
import s from './PageLoader.module.scss';

const PageLoaderComponent = () => (
    <div className={s.wrapper}>
        <Spin />
    </div>
);

export const PageLoader = memo(PageLoaderComponent);
