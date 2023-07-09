import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Icon } from '@/shared/ui/redesigned/Icon/Icon';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ToggleFeatures } from '@/shared/lib/features';
import ThemeIconDeprecated from '@/shared/assets/icons/theme.svg';
import ThemeIcon from '@/shared/assets/icons/theme-re.svg';
import cls from './ThemeSwitcher.module.scss';

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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Icon
                    onClick={onToggleHandler}
                    clickable
                    svg={ThemeIcon}
                />
            }
            off={
                <Button
                    onClick={onToggleHandler}
                    className={classNames(cls.ThemeSwitcher, {}, [className])}
                    theme={ButtonTheme.CLEAR}
                >
                    <IconDeprecated
                        svg={ThemeIconDeprecated}
                        className={cls.icon}
                    />
                </Button>
            }
        />
    );
});
