import { useParams } from 'react-router-dom';
import { EditableProfileCard } from '@/features/EditableProfileCard';

const ProfilePage = () => {
    const { id } = useParams();

    return <EditableProfileCard id={id} />;
};

export default ProfilePage;
