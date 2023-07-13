import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { NotificationButton } from '@/features/notificationButton';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { AvatarDropdown } from '@/features/avatarDropdown';
import cls from './Navbar.module.scss';
import { getRouteArticleCreate, getRouteMain } from '@/shared/const/router';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';

interface NavbarProps {
    className?: string;
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
        <AppLink to={getRouteMain()}>
            <Text
                theme={TextTheme.INVERTED}
                title={t('MAO')}
                className={cls.appName}
            />
        </AppLink>
    );

    if (userAuthData) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <header
                        className={classNames(cls.NavbarRedesigned, {}, [
                            className,
                        ])}
                    >
                        <HStack gap="16">
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </header>
                }
                off={
                    <header className={classNames(cls.Navbar, {}, [className])}>
                        {logo}
                        <HStack
                            gap="16"
                            align="center"
                        >
                            <AppLink to={getRouteArticleCreate()}>
                                {t('Створити статтю')}
                            </AppLink>
                            <HStack gap="16">
                                <NotificationButton />
                                <AvatarDropdown />
                            </HStack>
                        </HStack>
                    </header>
                }
            />
        );
    }

    return (
        <header
            className={classNames(
                toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => cls.NavbarRedesigned,
                    off: () => cls.Navbar,
                }),
                {},
                [className],
            )}
        >
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Button
                        variant="clear"
                        onClick={onShowModal}
                    >
                        {t('Увійти')}
                    </Button>
                }
                off={
                    <>
                        {logo}
                        <ButtonDeprecated
                            theme={ButtonTheme.CLEAR_INVERTED}
                            onClick={onShowModal}
                        >
                            {t('Увійти')}
                        </ButtonDeprecated>
                    </>
                }
            />
            {isAuthModal && (
                <LoginModal
                    onClose={onCloseModal}
                    isOpen={isAuthModal}
                />
            )}
        </header>
    );
});
