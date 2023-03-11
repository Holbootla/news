import { render, screen } from '@testing-library/react';
import { CurrencySelect } from './CurrencySelect';

describe('Tests for Currency component', () => {
    test('Test for basic render', () => {
        render(<CurrencySelect />);
        expect(screen.getByTestId('CurrencySelect')).toBeInTheDocument();
    });
});
