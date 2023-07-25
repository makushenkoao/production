import React from 'react';
import { useTranslation } from 'react-i18next';

export const EditArticle = () => {
    const { t } = useTranslation();
    return <div>{t('Сторінка редагування статті')}</div>;
};
