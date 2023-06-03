import { SVGProps, VFC } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface SidebarItemTypes {
    path: string;
    text: string;
    icon: VFC<SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemTypes[] = [
    {
        path: RoutePath.main,
        text: 'Головна',
        icon: MainIcon,
    },
    {
        path: RoutePath.about,
        text: 'Про сайт',
        icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        text: 'Профіль',
        icon: ProfileIcon,
    },
];
