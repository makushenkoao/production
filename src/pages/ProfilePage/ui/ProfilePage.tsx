import { EditableProfileCard, EditableProfileCardHeader } from 'features/editableProfileCard';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
    const { id } = useParams<{
        id: string;
    }>();

    if (!id) {
        // TODO - error
        return null;
    }

    return (
        <Page>
            <VStack gap="16" max>
                <EditableProfileCardHeader />
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
