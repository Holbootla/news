import { screen } from '@testing-library/react';
import { AppAvatar } from './AppAvatar';
import DefaultAvatar from '@/shared/assets/images/default-avatar.jpg';
import { renderCustom } from '@/shared/lib/tests/renderCustom';

describe('Tests for AppAvatar component', () => {
    test('Test for basic render', () => {
        renderCustom(<AppAvatar source={DefaultAvatar} />);
        expect(screen.getByTestId('AppAvatar')).toBeInTheDocument();
    });
});
