import { memo } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { SidebarItemTypes } from '../../model/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemTypes;
  collapsed: boolean
}

export const SidebarItem = memo((props : SidebarItemProps) => {
    const {
        item: {
            path,
            icon: Icon,
            text,
            authOnly,
        },
        collapsed,
    } = props;
    const { t } = useTranslation();

    const isAuth = useSelector(getUserAuthData);

    if (authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={path}
            className={classNames(cls.SidebarItem, {
                [cls.collapsed]: collapsed,
            })}
        >
            <Icon className={cls.icon} />
            <span className={cls.link}>{t(text)}</span>
        </AppLink>
    );
});
