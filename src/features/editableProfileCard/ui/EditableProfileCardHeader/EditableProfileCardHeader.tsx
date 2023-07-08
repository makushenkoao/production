import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { Text } from '@/shared/ui/deprecated/Text';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/ProfileSlice';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';

export const EditableProfileCardHeader = memo(
    ({ className }: { className?: string }) => {
        const { t } = useTranslation();
        const authData = useSelector(getUserAuthData);
        const profileData = useSelector(getProfileData);
        const canEdit = authData?.id === profileData?.id;
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
            <HStack
                justify="between"
                max
                className={classNames('', {}, [className])}
            >
                <Text title={t('Профіль')} />
                {canEdit && (
                    <HStack gap="4">
                        <Button
                            theme={
                                readonly
                                    ? ButtonTheme.OUTLINE
                                    : ButtonTheme.OUTLINE_RED
                            }
                            onClick={readonly ? onEdit : onCancel}
                            data-testid={
                                readonly
                                    ? 'EditableProfileCardHeader.EditButton'
                                    : 'EditableProfileCardHeader.CancelButton'
                            }
                        >
                            {t(readonly ? 'Редагувати' : 'Скасувати')}
                        </Button>
                        {!readonly && (
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onSave}
                                data-testid="EditableProfileCardHeader.SaveButton"
                            >
                                {t('Зберегти')}
                            </Button>
                        )}
                    </HStack>
                )}
            </HStack>
        );
    },
);
