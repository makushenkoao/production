import { ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  children: ReactNode;
  theme?: AppLinkTheme;
}

export const AppLink = (props: AppLinkProps) => {
  const {
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...rest
  } = props;
  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...rest}
    >
      {children}
    </Link>
  );
};
