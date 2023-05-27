import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children: ReactNode
    theme?: ThemeButton
}

export const Button = (props: ButtonProps) => {
    const {
        children, className, theme = ThemeButton.CLEAR, type = 'button', ...rest
    } = props;

    return (
        <button
            type={type}
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...rest}
        >
            {children}
        </button>
    );
};
