import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className = '' }: NavbarProps) => {
    const { t: tMain } = useTranslation('main');
    const { t: tAbout } = useTranslation('about');
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/">
                    {tMain('Головна сторінка')}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                    {tAbout('Про сайт')}
                </AppLink>
            </div>
        </div>
    );
};
