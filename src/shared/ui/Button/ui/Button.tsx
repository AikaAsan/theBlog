import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}
//ButtonProps inherits props from ButtonHTMLAttributes (ex: disabled onClick etc)
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, square, size, ...otherProps } = props;

    const modes: Record<string, boolean> = {
        [cls.square]: square,
        [cls[size]]: true,
    };

    return (
        <button
            className={classNames(cls.Button, modes, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
