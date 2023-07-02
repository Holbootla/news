import { memo } from 'react';
import { ProfileCard } from '@/entities/Profile';
import { AppPage } from '@/shared/ui';

const ProfilePage = memo(() => (
    <AppPage>
        <ProfileCard />
    </AppPage>
));

export default ProfilePage;
