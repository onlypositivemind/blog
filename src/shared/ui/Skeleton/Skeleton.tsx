import cn from 'classnames';
import { CSSProperties, memo } from 'react';
import s from './Skeleton.module.scss';

interface SkeletonProps {
    width?: string | number;
    height?: string | number;
    border?: string | number;
    className?: string;
}

export const Skeleton = memo(
    ({ className, height = '100%', width = '100%', border = 0 }: SkeletonProps) => {
        const styles: CSSProperties = {
            width,
            height,
            borderRadius: border,
        };

        return <div className={cn(s.skeleton, className)} style={styles} />;
    },
);
