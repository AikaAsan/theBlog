import { classNames } from 'shared/lib/classnames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
    const { t, i18n } = useTranslation();
    return (
        <div className={classNames(cls.Navbar)}>
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
