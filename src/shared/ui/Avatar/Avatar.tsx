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
    objectFit?: CSSProperties['objectFit'];
    className?: string;
}

const AvatarComponent = ({ src, alt, size = 50, objectFit = 'cover', className }: AvatarProps) => {
    const styles: CSSProperties = {
        width: size,
        height: size,
        objectFit,
    };

    return (
        <AppImage
            src={src || defaultAvatarImage}
            alt={alt}
            fallback={<Skeleton width={size} height={size} borderRadius='circle' />}
            className={cn(s.avatarWrapper, className)}
            style={styles}
        />
    );
};

export const Avatar = memo(AvatarComponent);
