import { render, screen } from '@testing-library/react';
import { CountrySelect } from './CountrySelect';

describe('Tests for Country component', () => {
    test('Test for basic render', () => {
        render(<CountrySelect />);
        expect(screen.getByTestId('CountrySelect')).toBeInTheDocument();
    });
});
