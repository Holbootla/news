import { render, screen } from '@testing-library/react';
import { AppCard } from './AppCard';

describe('Tests for AppCard component', () => {
    test('Test for basic render', () => {
        render(<AppCard />);
        expect(screen.getByTestId('AppCard')).toBeInTheDocument();
    });
});
