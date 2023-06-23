import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { NotificationButton } from 'features/notificationButton';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { HStack } from 'shared/ui/Stack';
import { AvatarDropdown } from 'features/avatarDropdown';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = memo((props: NavbarProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
    const userAuthData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const logo = (
        <AppLink to={RoutePath.main}>
            <Text theme={TextTheme.INVERTED} title={t('MAO')} className={cls.appName} />
        </AppLink>
    );

    if (userAuthData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                {logo}
                <HStack gap="16" align="center">
                    <AppLink to={RoutePath.article_create}>
                        {t('Створити статтю')}
                    </AppLink>
                    <HStack gap="16">
                        <NotificationButton />
                        <AvatarDropdown />
                    </HStack>
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
