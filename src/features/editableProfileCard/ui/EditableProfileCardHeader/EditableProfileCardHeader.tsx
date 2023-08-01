import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/ProfileSlice';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { getRouteChat } from '@/shared/const/router';

export const EditableProfileCardHeader = memo(
    ({ className }: { className?: string }) => {
        const { t } = useTranslation();
        const navigate = useNavigate();
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

        const onNavigateToChat = useCallback(() => {
            if (profileData?.id) {
                navigate(getRouteChat(profileData?.id));
            }
        }, [navigate, profileData?.id]);

        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Card
                        padding="24"
                        max
                    >
                        <HStack
                            justify="between"
                            max
                            className={classNames('', {}, [className])}
                        >
                            <Text title={t('Профіль')} />
                            {canEdit ? (
                                <HStack gap="8">
                                    <Button
                                        color={readonly ? 'normal' : 'error'}
                                        onClick={readonly ? onEdit : onCancel}
                                        data-testid={
                                            readonly
                                                ? 'EditableProfileCardHeader.EditButton'
                                                : 'EditableProfileCardHeader.CancelButton'
                                        }
                                    >
                                        {t(
                                            readonly
                                                ? 'Редагувати'
                                                : 'Скасувати',
                                        )}
                                    </Button>
                                    {!readonly && (
                                        <Button
                                            color="success"
                                            onClick={onSave}
                                            data-testid="EditableProfileCardHeader.SaveButton"
                                        >
                                            {t('Зберегти')}
                                        </Button>
                                    )}
                                </HStack>
                            ) : (
                                <Button onClick={onNavigateToChat}>
                                    {t('Написати')}
                                </Button>
                            )}
                        </HStack>
                    </Card>
                }
                off={
                    <HStack
                        justify="between"
                        max
                        className={classNames('', {}, [className])}
                    >
                        <TextDeprecated title={t('Профіль')} />
                        {canEdit && (
                            <HStack gap="4">
                                <ButtonDeprecated
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
                                </ButtonDeprecated>
                                {!readonly && (
                                    <ButtonDeprecated
                                        theme={ButtonTheme.OUTLINE}
                                        onClick={onSave}
                                        data-testid="EditableProfileCardHeader.SaveButton"
                                    >
                                        {t('Зберегти')}
                                    </ButtonDeprecated>
                                )}
                            </HStack>
                        )}
                    </HStack>
                }
            />
        );
    },
);
