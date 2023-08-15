/* eslint-disable i18next/no-literal-string */
import { LoginModal } from 'features/AuthByUsername';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classnames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import cls from './Navbar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
    getUserAuthData,
    getUserRoles,
    isUserAdmin,
    isUserManager,
    userActions,
} from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/ui/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Popups/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { HStack } from 'shared/ui/Stack';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Popover } from 'shared/ui/Popups';

interface NavbarProps {
    className?: string;
}
export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const isAdmin = useSelector(isUserAdmin);

    const isManager = useSelector(isUserManager);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
        setIsAuthModal(false);
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    title={t(`Medium Clone`)}
                    theme={TextTheme.INVERTED}
                />
                <AppLink
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.createBtn}
                >
                    {t('create new article')}
                </AppLink>
                <HStack gap={`16`} className={cls.actions}>
                    <Popover
                        direction={'bottom left'}
                        trigger={
                            <Button theme={ButtonTheme.CLEAR}>
                                <Icon
                                    Svg={NotificationIcon}
                                    inverted={true}
                                ></Icon>
                            </Button>
                        }
                    >
                        test
                    </Popover>

                    <Dropdown
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
                            <Avatar
                                src={authData.avatar}
                                size={30}
                                alt='avatar'
                            />
                        }
                        direction={`bottom left`}
                    />
                </HStack>
            </header>
        );
    }
    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onShowModal}
            >
                {t('Login')}
            </Button>
            {/* {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            )} */}
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </header>
    );
});
