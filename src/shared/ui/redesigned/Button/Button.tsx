import { type ButtonHTMLAttributes, memo, type ReactNode } from 'react';
import { classNames, Mods } from '../../../lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline';

export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    variant?: ButtonVariant;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    fullWidth?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const {
        children,
        className,
        variant = 'clear',
        type = 'button',
        square,
        size = 'm',
        disabled,
        fullWidth,
        ...rest
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
    };

    return (
        <button
            type={type}
            className={classNames(cls.Button, mods, [
                className,
                cls[variant],
                cls[size],
            ])}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    );
});
