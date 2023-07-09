import { memo, type ReactNode } from 'react';
import { type LinkProps, NavLink } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
    className?: string;
    children: ReactNode;
    variant?: AppLinkVariant;
    activeClassName?: string;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        className,
        children,
        to,
        activeClassName = '',
        variant = 'primary',
        ...rest
    } = props;
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                classNames(cls.AppLink, { [activeClassName]: isActive }, [
                    className,
                    cls[variant],
                ])
            }
            {...rest}
        >
            {children}
        </NavLink>
    );
});
