import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Page } from 'widgets/Page/Page';
import { ListBox } from 'shared/ui/ListBox/ListBox';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('Головна')}
            <ListBox
                defaultValue="Виберіть значення"
                onChange={(v: string) => {}}
                value={undefined}
                items={[
                    {
                        value: '1',
                        content: '1',
                    },
                    {
                        value: '2',
                        content: '2',
                        disabled: true,
                    },
                    {
                        value: '3',
                        content: '3',
                    },
                ]}
            />
        </Page>
    );
};

export default MainPage;
