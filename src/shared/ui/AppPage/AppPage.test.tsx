import { render, screen } from '@testing-library/react';
import { AppPage } from './AppPage';

describe('Tests for AppPage component', () => {
    test('Test for basic render', () => {
        render(<AppPage />);
        expect(screen.getByTestId('AppPage')).toBeInTheDocument();
    });
});
