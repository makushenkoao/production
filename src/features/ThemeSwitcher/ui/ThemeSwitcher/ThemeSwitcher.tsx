import { memo, useCallback } from 'react';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ThemeSwitcher.module.scss';
import { Icon } from '@/shared/ui/deprecated/Icon';

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
            <Icon
                svg={ThemeIcon}
                className={cls.icon}
            />
        </Button>
    );
});
