import { HStack } from '../Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLogo.module.scss';
import Logo from '@/shared/assets/icons/logo.svg';

export const AppLogo = ({ className }: { className?: string }) => {
    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.appLogoWrapper, {}, [className])}
        >
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
            <Logo />
        </HStack>
    );
};
