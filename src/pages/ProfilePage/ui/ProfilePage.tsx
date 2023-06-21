import { EditableProfileCard } from 'features/editableProfileCard';
import { Page } from 'widgets/Page/Page';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
    const { id } = useParams<{
        id: string;
    }>();

    return (
        <Page>
            <EditableProfileCard id={id} />
        </Page>
    );
};

export default ProfilePage;
