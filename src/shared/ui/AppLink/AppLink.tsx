import { createCipheriv } from 'crypto';
import { MainPage } from 'pages/MainPage';
import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classnames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;
    console.log('className', className);
    console.log('cls[theme]', cls[theme]);
    console.log(theme); 
    return (
        <Link
            {...otherProps}
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
        >
            {children}
        </Link>
    );
};
