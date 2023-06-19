/* eslint-disable i18next/no-literal-string */
import { LoginModal } from 'features/AuthByUsername';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classnames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import cls from './Navbar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/ui/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';

interface NavbarProps {
    className?: string;
}
export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    console.log(
        'RoutePath.profile + authData.id: ',
        RoutePath.profile + authData?.id
    );

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

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    title={t('Medium Clone')}
                    theme={TextTheme.INVERTED}
                />
                <AppLink
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.createBtn}
                >
                    {t('create new article')}
                </AppLink>
                <Dropdown
                    className={cls.dropdown}
                    items={[
                        {
                            content: t('Profile'),
                            href: RoutePath.profile + authData.id,
                        },
                        { content: t('Logout'), onClick: onLogout },
                    ]}
                    trigger={
                        <Avatar src={authData.avatar} size={30} alt='avatar' />
                    }
                    direction={`bottom left`}
                />
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
