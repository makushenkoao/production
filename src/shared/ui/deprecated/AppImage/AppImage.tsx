import {
    ImgHTMLAttributes,
    memo,
    ReactElement,
    useLayoutEffect,
    useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback?: ReactElement;
    errorFallback?: ReactElement;
}

/**
 * Deprecated, use new components from redesigned
 * @deprecated
 */
export const AppImage = memo((props: AppImageProps) => {
    const {
        className,
        alt = 'image',
        src,
        fallback,
        errorFallback,
        ...rest
    } = props;
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [hasError, setHasError] = useState<boolean>(false);

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

    if (isLoading && fallback) return fallback;

    if (hasError && errorFallback) return errorFallback;

    return (
        <img
            className={className}
            alt={alt}
            src={src}
            {...rest}
        />
    );
});
