import { memo } from 'react';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import SunIcon from '@/shared/assets/icons/sun.svg';
import MoonIcon from '@/shared/assets/icons/moon.svg';
import cls from './ThemeSwitcher.module.scss';
import { Theme } from '@/shared/const/theme';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { toggleTheme, theme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            theme={ButtonTheme.CLEAR}
        >
            {theme === Theme.DARK ? (
                <SunIcon className={cls.icon} />
            ) : (
                <MoonIcon className={cls.icon} />
            )}
        </Button>
    );
});
