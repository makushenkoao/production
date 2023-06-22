import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Сталася непередбачена помилка')}</p>
            <Button
                theme={ButtonTheme.CLEAR}
                onClick={reloadPage}
            >
                {
                    t('Оновити сторіку')
                }
            </Button>
        </div>
    );
};
