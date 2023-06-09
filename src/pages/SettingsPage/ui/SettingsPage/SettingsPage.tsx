import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { UiDesignSwitcher } from '@/features/uiDesignSwitcher';

const SettingsPage = () => {
    const { t } = useTranslation();
    return (
        <Page>
            <VStack gap="16">
                <Text title={t('Налаштування користувача')} />
                <UiDesignSwitcher />
            </VStack>
        </Page>
    );
};

export default memo(SettingsPage);
