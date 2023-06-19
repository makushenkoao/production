import { EditableProfileCard } from 'features/editableProfileCard';
import { Page } from 'widgets/Page/Page';
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
            <EditableProfileCard id={id} />
        </Page>
    );
};

export default ProfilePage;
