import { screen } from '@testing-library/react';
import { ProfileCard } from './ProfileCard';
import { renderCustom } from '@/shared/lib/tests/renderCustom';

describe('Tests for ProfileCard component', () => {
    test('Test for basic render', () => {
        renderCustom(<ProfileCard />);
        expect(screen.getByTestId('ProfileCard')).toBeInTheDocument();
    });
});
