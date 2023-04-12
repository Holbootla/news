import { render, screen } from '@testing-library/react';
import { Skeleton } from './Skeleton';

describe('Tests for Skeleton component', () => {
    test('Test for basic render', () => {
        render(<Skeleton width={200} height={200} />);
        expect(screen.getByTestId('Skeleton')).toBeInTheDocument();
    });
});
