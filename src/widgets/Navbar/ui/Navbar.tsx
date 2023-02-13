/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classnames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    to='/'
                    className={cls.mainLink}
                    theme={AppLinkTheme.RED}
                >
                    {t('MAIN')}
                </AppLink>
                <AppLink to='/about'>{t('ABOUT')} </AppLink>
            </div>
        </div>
    );
};
