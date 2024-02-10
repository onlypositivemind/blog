import cn from 'classnames';
import type { CSSProperties } from 'react';
import { memo } from 'react';
import { AppImage } from '../AppImage/AppImage';
import { Skeleton } from '../Skeleton/Skeleton';
import defaultAvatarImage from '@/shared/assets/jpg/avatarPlaceholder.jpg';
import s from './Avatar.module.scss';

interface AvatarProps {
    src?: string;
    alt?: string;
    size?: string | number;
    className?: string;
}

const AvatarComponent = ({ src, alt, className, size = 50 }: AvatarProps) => {
    const styles: CSSProperties = {
        width: size,
        height: size,
    };

    return (
        <div className={cn(className, s.avatarWrapper)} style={styles}>
            <AppImage
                src={src || defaultAvatarImage}
                alt={alt}
                fallback={<Skeleton width={size} height={size} borderRadius='circle' />}
            />
        </div>
    );
};

export const Avatar = memo(AvatarComponent);
