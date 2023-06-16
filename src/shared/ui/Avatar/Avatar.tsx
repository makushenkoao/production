import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  rounded?: boolean;
}

export const Avatar = (props: AvatarProps) => {
    const {
        src, alt, className, height = 100, width = 100, rounded,
    } = props;

    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={classNames(cls.Avatar, {
                [cls.rounded]: rounded,
            }, [className])}
        />
    );
};
