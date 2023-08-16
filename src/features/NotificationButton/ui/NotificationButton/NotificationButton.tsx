import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classnames/classNames';
import cls from './NotificationButton.module.scss';
import { Popover } from '../../../../shared/ui/Popups';
import { NotificationList } from 'entities/Notification';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton: FC<NotificationButtonProps> = memo(
    (props: NotificationButtonProps) => {
        const { className } = props;

        return (
            <Popover
                className={classNames('', {}, [className])}
                direction='bottom left'
                trigger={
                    <Button theme={ButtonTheme.CLEAR}>
                        <Icon Svg={NotificationIcon} />
                    </Button>
                }
            >
                <NotificationList className={cls.notifications} />
            </Popover>
        );
    }
);
