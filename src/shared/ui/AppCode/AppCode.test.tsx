import { render, screen } from '@testing-library/react';
import { AppCode } from './AppCode';

describe('Tests for AppCode component', () => {
    test('Test for basic render', () => {
        render(<AppCode />);
        expect(screen.getByTestId('AppCode')).toBeInTheDocument();
    });
});
