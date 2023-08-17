import { Modes, classNames } from 'shared/lib/classnames/classNames';
import cls from './Drawer.module.scss';
import { ReactNode } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Overlay } from '../Overlay/Overlay';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Drawer = (props: DrawerProps) => {
    const { className, children, isOpen, onClose } = props;

    const { theme } = useTheme();

    const modes: Modes = {
        [cls.opened]: isOpen,
    };
    return (
        <div
            className={classNames(cls.Drawer, modes, [
                className,
                theme,
                'app_drawer',
            ])}
        >
            <Overlay onClick={onClose}>
                <div className={cls.content}>{children}</div>
            </Overlay>
        </div>
    );
};
