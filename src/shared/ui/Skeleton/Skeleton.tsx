import cn from 'classnames';
import type { CSSProperties } from 'react';
import { memo } from 'react';
import s from './Skeleton.module.scss';

type SkeletonRadius = 'circle' | 'xs' | 's' | 'm' | 'l';

interface SkeletonProps {
    width?: string | number;
    height?: string | number;
    borderRadius?: SkeletonRadius;
    className?: string;
}

const SkeletonComponent = ({
    className,
    height = '100%',
    width = '100%',
    borderRadius,
}: SkeletonProps) => {
    const styles: CSSProperties = {
        width,
        height,
    };

    return (
        <div
            className={cn(s.skeleton, borderRadius && s[`radius_${borderRadius}`], className)}
            style={styles}
        />
    );
};

export const Skeleton = memo(SkeletonComponent);
