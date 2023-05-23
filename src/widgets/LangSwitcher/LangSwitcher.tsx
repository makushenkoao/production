import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button";
import { ThemeButton } from "shared/ui/Button/ui/Button";
import cls from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { i18n, t } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ua" ? "en" : "ua");
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggle}
      className={classNames(cls.LangSwitcher, {}, [className])}
    >
      {t("Мова")}
    </Button>
  );
};
