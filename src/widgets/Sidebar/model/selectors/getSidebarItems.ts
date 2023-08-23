import ArticleIcon from '@/shared/assets/icons/article-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import { SidebarItemType } from '../types/sidebar';
import { getUserAuthData } from '@/entities/User';
import { createSelector } from '@reduxjs/toolkit';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: RoutePath.main,
            text: 'MAIN',
            Icon: MainIcon,
        },
        {
            path: RoutePath.about,
            text: 'ABOUT',
            Icon: AboutIcon,
        },
    ];
    if (userData) {
        sidebarItemsList.push(
            {
                path: RoutePath.profile + userData?.id,
                text: 'PROFILE',
                Icon: ProfileIcon,
                authOnly: true,
            },
            {
                path: RoutePath.articles,
                text: 'ARTICLES',
                Icon: ArticleIcon,
                authOnly: true,
            }
        );
    }
    return sidebarItemsList;
});
