import { classNames } from 'shared/lib/classnames/classNames';
import cls from './Overlay.module.scss';
import { ReactNode } from 'react';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
    children?: ReactNode;
}

export const Overlay = (props: OverlayProps) => {
    const { className, onClick, children } = props;
    return (
        <div
            className={classNames(cls.Overlay, {}, [className])}
            onClick={onClick}
        >
            {children}
        </div>
    );
};
