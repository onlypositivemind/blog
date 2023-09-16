import { profileReducer } from '@/entities/Profile';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader';

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    return (
        <DynamicModuleLoader reducers={reducers}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <p>ProfilePage</p>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
