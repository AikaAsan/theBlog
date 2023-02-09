import { classNames } from 'shared/lib/classnames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar)}>
           
            <div className={cls.links}>
                <AppLink
                    to='/'
                    className={cls.mainLink}
                    theme={AppLinkTheme.RED}
                >
                    MAIN{' '}
                </AppLink>
                <AppLink to='/about'>ABOUT</AppLink>
            </div>
        </div>
    );
};
