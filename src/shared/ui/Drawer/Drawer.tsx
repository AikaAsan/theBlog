import { classNames } from '@/shared/lib/classnames/classNames';
import { ReactNode, memo, useCallback, useEffect } from 'react';
import { useTheme } from '@/app/providers/ThemeProvider';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import { useAnimationLibs } from '@/shared/components/AnimationProvider';
import cls from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const height = window.innerHeight - 100;

export const DrawerContent = memo((props: DrawerProps) => {
    const { className, children, isOpen, onClose, lazy } = props;

    const { theme } = useTheme();
    const { Spring, Gesture } = useAnimationLibs();

    const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

    const openDrawer = useCallback(() => {
        api.start({ y: 0, immediate: false });
    }, [api]);

    useEffect(() => {
        if (isOpen) {
            openDrawer();
        }
    }, [api, isOpen, openDrawer]);

    const close = (velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: { ...Spring.config.stiff, velocity },
            onResolve: onClose,
        });
    };

    const bind = Gesture.useDrag(
        ({
            last,
            velocity: [, vy],
            direction: [, dy],
            movement: [, my],
            cancel,
        }) => {
            if (my < -70) cancel();

            if (last) {
                if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    close();
                } else {
                    openDrawer();
                }
            } else {
                api.start({ y: my, immediate: true });
            }
        },
        {
            from: () => [0, y.get()],
            filterTaps: true,
            bounds: { top: 0 },
            rubberband: true,
        }
    );

    if (!isOpen) {
        return null;
    }

    const display = y.to((py) => (py < height ? 'block' : 'none'));

    return (
        <Portal>
            <div
                className={classNames(cls.Drawer, {}, [
                    className,
                    theme,
                    'app_drawer',
                ])}
            >
                <Overlay onClick={close}>
                    <Spring.a.div
                        className={cls.sheet}
                        style={{
                            display,
                            bottom: `calc(-100vh + ${height - 100}px)`,
                            y,
                        }}
                        {...bind()}
                    >
                        {children}
                    </Spring.a.div>
                </Overlay>
            </div>
        </Portal>
    );
});

export const Drawer = memo((props: DrawerProps) => {
    const { className, children, isOpen, onClose, lazy } = props;
    const { isLoaded } = useAnimationLibs();

    if (!isLoaded) {
        return null;
    }

    return (
        <DrawerContent isOpen={isOpen} onClose={onClose} lazy>
            {children}
        </DrawerContent>
    );
});
