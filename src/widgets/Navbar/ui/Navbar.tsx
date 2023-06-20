import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { HStack } from 'shared/ui/Stack';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = memo((props: NavbarProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
    const dispatch = useDispatch();
    const userAuthData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const logo = (
        <AppLink to={RoutePath.main}>
            <Text theme={TextTheme.INVERTED} title={t('MAO')} className={cls.appName} />
        </AppLink>
    );

    const isAdminPanelAvailable = isAdmin || isManager;

    if (userAuthData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                {logo}
                <HStack gap="16" align="center">
                    <AppLink to={RoutePath.article_create}>
                        {t('Створити статтю')}
                    </AppLink>
                    <Dropdown
                        items={[
                            ...(isAdminPanelAvailable
                                ? [
                                    {
                                        content: t('Адмінка'),
                                        href: RoutePath.admin_panel,
                                    },
                                ]
                                : []
                            ),
                            {
                                content: t('Профіль'),
                                href: RoutePath.profile + userAuthData.id,
                            },
                            {
                                content: <Text text={t('Вийти')} theme={TextTheme.ERROR} />,
                                onClick: onLogout,
                            },
                        ]}
                        trigger={(
                            <Avatar
                                src={userAuthData.avatar}
                                height={30}
                                width={30}
                                rounded
                                alt="User"
                            />
                        )}
                        direction="bottom left"
                    />
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            {logo}
            <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal}>
                {t('Увійти')}
            </Button>
            {isAuthModal && (
                <LoginModal
                    onClose={onCloseModal}
                    isOpen={isAuthModal}
                />
            )}
        </header>
    );
});
