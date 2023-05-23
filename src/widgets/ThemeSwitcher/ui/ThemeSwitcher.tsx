import { Button } from "shared/ui/Button";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme, Theme } from "app/providers/ThemeProvider";
import SunIcon from "shared/assets/icons/sun.svg";
import MoonIcon from "shared/assets/icons/moon.svg";
import cls from "./ThemeSwitcher.module.scss";
import { ThemeButton } from "shared/ui/Button/ui/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { toggleTheme, theme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
    >
      {theme === Theme.LIGHT ? (
        <MoonIcon className={cls.icon} />
      ) : (
        <SunIcon className={cls.icon} />
      )}
    </Button>
  );
};
