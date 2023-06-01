import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    M= 'size_m',
    L= 'size_l',
    XL= 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children: ReactNode
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
    disabled?: boolean
}

export const Button = (props: ButtonProps) => {
    const {
        children,
        className,
        theme = ButtonTheme.CLEAR,
        type = 'button',
        square,
        size = ButtonSize.M,
        disabled,
        ...rest
    } = props;

    const mods: Record<string, boolean> = {
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    };

    return (
        <button
            type={type}
            className={classNames(cls.Button, mods, [className, cls[theme]])}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    );
};
