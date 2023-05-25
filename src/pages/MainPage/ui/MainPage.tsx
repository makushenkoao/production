import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageLoader } from 'widgets/PageLoader';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            {t('Головна сторінка')}
        </div>
    );
};

export default MainPage;
