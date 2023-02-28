import { render, screen } from '@testing-library/react';
import { AppText } from './AppText';

describe('Tests for AppText component', () => {
    test('Test for basic render', () => {
        render(<AppText />);
        expect(screen.getByTestId('AppText')).toBeInTheDocument();
    });
});
