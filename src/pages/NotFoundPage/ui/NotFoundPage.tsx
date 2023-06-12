import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import cls from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
    const { t } = useTranslation();
    return (
        <Page className={cls.NotFoundPage}>
            {t('Сторінка не знайдена')}
        </Page>
    );
};
