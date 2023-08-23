import { useTheme } from '@/app/providers/ThemeProvider';
import { FC, ReactNode } from 'react';
import { classNames, Modes } from '@/shared/lib/classnames/classNames';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';
import { Overlay } from '../Overlay/Overlay';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}


export const Modal: FC<ModalProps> = (props: ModalProps) => {
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
                className={classNames(cls.Modal, modes, [
                    className,
                    theme,
                    'app_modal',
                ])}
            >
                <Overlay onClick={close}>
                    <div className={cls.content}>{children}</div>
                </Overlay>
            </div>
        </Portal>
    );
};
