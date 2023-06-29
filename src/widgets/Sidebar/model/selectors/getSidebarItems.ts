import { createSelector } from '@reduxjs/toolkit';
import MainIcon from '@/shared/assets/icons/main.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemTypes } from '../types/sidebar';
import { getRouteAbout, getRouteArticles, getRouteMain } from '@/shared/const/router';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemTypes[] = [
            {
                path: getRouteMain(),
                text: 'Головна',
                icon: MainIcon,
            },
            {
                path: getRouteAbout(),
                text: 'Про сайт',
                icon: AboutIcon,
            },
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: getRouteArticles(),
                    text: 'Статті',
                    icon: ArticleIcon,
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },
);
