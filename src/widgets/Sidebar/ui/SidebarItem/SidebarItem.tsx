import { getUserAuthData } from 'entities/User';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classnames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <div className={classNames(cls.SidebarItem, {}, [])}>
            <AppLink
                to={item.path}
                theme={AppLinkTheme.SECONDARY}
                className={classNames(
                    cls.item,
                    { [cls.collapsed]: collapsed },
                    []
                )}
            >
                <item.Icon className={cls.icon} />
                <span className={cls.link}>{t(item.text)} </span>
            </AppLink>
        </div>
    );
});
