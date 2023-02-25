import { render, screen } from '@testing-library/react';
import { AppInput } from './AppInput';

describe('Tests for AppInput component', () => {
    test('Test for basic render', () => {
        render(<AppInput />);
        expect(screen.getByTestId('appInput')).toBeInTheDocument();
    });
});
