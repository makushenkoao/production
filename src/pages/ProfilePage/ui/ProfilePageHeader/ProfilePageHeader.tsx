import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancel = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профіль')} />
            <div className={cls.buttonsWrapper}>
                <Button
                    theme={readonly ? ButtonTheme.OUTLINE : ButtonTheme.OUTLINE_RED}
                    onClick={readonly ? onEdit : onCancel}
                >
                    {t(readonly ? 'Редагувати' : 'Скасувати')}
                </Button>
                {!readonly && (
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        onClick={onSave}
                    >
                        {t('Зберегти')}
                    </Button>
                )}
            </div>
        </div>
    );
};
