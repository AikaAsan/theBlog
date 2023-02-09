import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classnames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
}
//ButtonProps inherits props from ButtonHTMLAttributes (ex: disabled onClick etc)
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, ...otherProps } = props;
    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
