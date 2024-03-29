import { FC, memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classnames/classNames';
import cls from './NotificationButton.module.scss';
import { Popover } from '../../../../shared/ui/Popups';
import { NotificationList } from '@/entities/Notification';
import { Button, ButtonTheme } from '@/shared/ui/Button/ui/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { AnimationProvider } from '@/shared/components/AnimationProvider';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton: FC<NotificationButtonProps> = memo(
    (props: NotificationButtonProps) => {
        const { className } = props;
        const isMobile = useDevice();
        const [isOpen, setIsOpen] = useState(false);

        const onOpenDrawer = useCallback(() => {
            setIsOpen(true);
        }, []);

        const onCloseDrawer = useCallback(() => {
            setIsOpen(false);
        }, []);

        const trigger = (
            <Button theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
                <Icon Svg={NotificationIcon} inverted />
            </Button>
        );

        return (
            <div>
                {!isMobile ? (
                    <Popover
                        className={classNames('', {}, [className])}
                        direction='bottom left'
                        trigger={trigger}
                    >
                        <NotificationList className={cls.notifications} />
                    </Popover>
                ) : (
                    <>
                        {trigger}

                        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                            <NotificationList />
                        </Drawer>
                    </>
                )}
            </div>
        );
    }
);
