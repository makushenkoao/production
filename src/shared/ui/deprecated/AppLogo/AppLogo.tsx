import { HStack } from '../Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLogo.module.scss';
import Logo from '@/shared/assets/icons/logo.svg';

interface AppLogoProps {
    className?: string;
    width?: string | number;
    height?: string | number;
}

/**
 * Deprecated, use new components from redesigned
 * @deprecated
 */
export const AppLogo = (props: AppLogoProps) => {
    const { className, height = 50, width = 50 } = props;
    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.appLogoWrapper, {}, [className])}
        >
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
            <Logo
                width={width}
                height={height}
            />
        </HStack>
    );
};
