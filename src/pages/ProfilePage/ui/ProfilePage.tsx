import { memo } from 'react';
import { ProfileCard } from '@/entities/Profile';
import { Page } from '@/widgets/Page';

const ProfilePage = memo(() => (
    <Page>
        <ProfileCard />
    </Page>
));

export default ProfilePage;
