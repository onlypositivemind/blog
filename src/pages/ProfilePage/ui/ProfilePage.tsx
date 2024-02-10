import { useParams } from 'react-router-dom';
import { EditableProfileCard } from '@/features/EditableProfileCard';

const ProfilePage = () => {
    const { username } = useParams<{ username: string }>();

    return <EditableProfileCard username={username!} />;
};

export default ProfilePage;
