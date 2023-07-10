import { memo, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { Text, TextAlign } from '@/shared/ui/deprecated/Text';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Drawer } from '@/shared/ui/deprecated/Drawer';

export const ArticlePageGreeting = memo(() => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const { isArticlesPageWasOpened } = useJsonSettings();

    useEffect(() => {
        if (!isArticlesPageWasOpened) {
            setIsOpen(true);
            dispatch(
                saveJsonSettings({
                    isArticlesPageWasOpened: true,
                }),
            );
        }
    }, [dispatch, isArticlesPageWasOpened]);

    const onClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    const content = (
        <VStack
            max
            gap="16"
            align="normal"
        >
            <Text
                align={TextAlign.CENTER}
                title={t('Ласкаво просимо на сторінку статей')}
                text={t('Ви можете знайти та переглядати статті на різні теми')}
            />
            {!isMobile && (
                <HStack justify="end">
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        onClick={onClose}
                    >
                        {t('Закрити')}
                    </Button>
                </HStack>
            )}
        </VStack>
    );

    if (isMobile) {
        return (
            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                lazy
            >
                {content}
            </Drawer>
        );
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            {content}
        </Modal>
    );
});
