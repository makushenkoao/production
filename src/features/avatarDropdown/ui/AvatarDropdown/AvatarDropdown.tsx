import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextTheme } from '@/shared/ui/Text';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const userAuthData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (!userAuthData) {
        return null;
    }

    return (
        <Dropdown
            className={classNames('', {}, [className])}
            items={[
                ...(isAdminPanelAvailable
                    ? [
                          {
                              content: t('Адмінка'),
                              href: getRouteAdmin(),
                          },
                      ]
                    : []),
                {
                    content: t('Профіль'),
                    href: getRouteProfile(userAuthData.id),
                },
                {
                    content: <Text text={t('Вийти')} theme={TextTheme.ERROR} />,
                    onClick: onLogout,
                },
            ]}
            trigger={
                <Avatar
                    src={userAuthData.avatar}
                    height={30}
                    width={30}
                    rounded
                    alt="User"
                />
            }
            direction="bottom left"
        />
    );
});
