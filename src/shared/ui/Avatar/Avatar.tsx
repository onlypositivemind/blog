import cn from 'classnames';
import { CSSProperties, memo } from 'react';
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
            {/*TODO Давить дефолтный аватар, если нет аватарки юзера*/}
            <img src={src} alt={alt} />
        </div>
    );
};

export const Avatar = memo(AvatarComponent);
