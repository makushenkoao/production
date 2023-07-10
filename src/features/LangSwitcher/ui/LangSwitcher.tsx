import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { i18n, t } = useTranslation();

    const toggle = () => {
        i18n?.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua');
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Button
                    onClick={toggle}
                    className={classNames('', {}, [className])}
                    variant="clear"
                >
                    {t(short ? 'Скорочено' : 'Мова')}
                </Button>
            }
            off={
                <ButtonDeprecated
                    theme={ButtonTheme.CLEAR}
                    onClick={toggle}
                    className={classNames('', {}, [className])}
                >
                    {t(short ? 'Скорочено' : 'Мова')}
                </ButtonDeprecated>
            }
        />
    );
});
