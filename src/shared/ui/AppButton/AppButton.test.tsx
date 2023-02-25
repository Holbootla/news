import { render, screen } from '@testing-library/react';
import { AppButton } from './AppButton';

describe('Tests for AppButton component', () => {
    test('Test for basic render', () => {
        render(<AppButton />);
        expect(screen.getByTestId('appButton')).toBeInTheDocument();
    });
});
