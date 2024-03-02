import type { CSSProperties, ImgHTMLAttributes, ReactElement } from 'react';
import { memo, useLayoutEffect, useState } from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    fallback?: ReactElement;
    errorFallback?: ReactElement;
    objectFit?: CSSProperties['objectFit'];
    className?: string;
}

const AppImageComponent = ({
    errorFallback,
    fallback,
    className,
    src,
    alt,
    objectFit = 'cover',
    ...restProps
}: AppImageProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setIsLoading(false);
            setHasError(true);
        };
    }, [src]);

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && errorFallback) {
        return errorFallback;
    }

    return <img className={className} src={src} alt={alt} style={{ objectFit }} {...restProps} />;
};

export const AppImage = memo(AppImageComponent);
