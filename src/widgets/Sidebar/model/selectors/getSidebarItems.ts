import { createSelector } from '@reduxjs/toolkit';
import MainIconDeprecated from '@/shared/assets/icons/main.svg';
import AboutIconDeprecated from '@/shared/assets/icons/about.svg';
import ArticleIconDeprecated from '@/shared/assets/icons/article.svg';
import MainIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/info.svg';
import ArticleIcon from '@/shared/assets/icons/article-re.svg';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemTypes } from '../types/sidebar';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
} from '@/shared/const/router';
import { toggleFeatures } from '@/shared/lib/features';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemTypes[] = [
        {
            path: getRouteMain(),
            text: 'Головна',
            icon: toggleFeatures({
                name: 'isAppRedesigned',
                off: () => MainIconDeprecated,
                on: () => MainIcon,
            }),
        },
        {
            path: getRouteAbout(),
            text: 'Про сайт',
            icon: toggleFeatures({
                name: 'isAppRedesigned',
                off: () => AboutIconDeprecated,
                on: () => AboutIcon,
            }),
        },
    ];

    if (userData) {
        sidebarItemsList.push({
            path: getRouteArticles(),
            text: 'Статті',
            icon: toggleFeatures({
                name: 'isAppRedesigned',
                off: () => ArticleIconDeprecated,
                on: () => ArticleIcon,
            }),
            authOnly: true,
        });
    }

    return sidebarItemsList;
});
