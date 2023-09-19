import { FC, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classnames/classNames';
import { useTranslation } from 'react-i18next';
import { RoutePath } from '@/shared/const/router';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User';
import { useSelector, useDispatch } from 'react-redux';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown: FC<AvatarDropdownProps> = memo(
    (props: AvatarDropdownProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const dispatch = useDispatch();
        const authData = useSelector(getUserAuthData);
        const isAdmin = useSelector(isUserAdmin);
        const isManager = useSelector(isUserManager);
        const isAdminPanelAvailable = isAdmin || isManager;

        const onLogout = useCallback(() => {
            dispatch(userActions.logout());
        }, [dispatch]);

        if (!authData) {
            return null;
        }

        return (
            <Dropdown
                className={classNames('', {}, [className])}
                items={[
                    ...(isAdminPanelAvailable
                        ? [
                            {
                                content: t('Admin Panel'),
                                href: RoutePath.admin_panel,
                            },
                        ]
                        : []),
                    {
                        content: t('Profile'),
                        href: RoutePath.profile + authData.id,
                    },
                    { content: t('Logout'), onClick: onLogout },
                ]}
                trigger={
                    <Avatar src={authData.avatar} size={30} alt={`avatar`} />
                }
                direction={`bottom left`}
            />
        );
    }
);
