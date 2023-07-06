import { memo, useCallback } from 'react';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import SunIcon from '@/shared/assets/icons/sun.svg';
import MoonIcon from '@/shared/assets/icons/moon.svg';
import cls from './ThemeSwitcher.module.scss';
import { Theme } from '@/shared/const/theme';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [dispatch, toggleTheme]);

    return (
        <Button
            onClick={onToggleHandler}
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
