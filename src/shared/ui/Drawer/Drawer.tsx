import { Modes, classNames } from 'shared/lib/classnames/classNames';
import cls from './Drawer.module.scss';
import { ReactNode } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Overlay } from '../Overlay/Overlay';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { Portal } from '@headlessui/react';
interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Drawer = (props: DrawerProps) => {
    const { className, children, isOpen, onClose, lazy } = props;

    const { theme } = useTheme();
    const { close, isClosing, isMounted } = useModal({
        animationDelay: 300,
        onClose,
        isOpen,
    });

    const modes: Modes = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div
                className={classNames(cls.Drawer, modes, [
                    className,
                    theme,
                    'app_drawer',
                ])}
            >
                <Overlay onClick={close}>
                    <div className={cls.content}>{children}</div>
                </Overlay>
            </div>
        </Portal>
    );
};