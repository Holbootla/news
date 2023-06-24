import { render, screen } from '@testing-library/react';
import { SelectArticlesView } from './SelectArticlesView';

describe('Tests for SelectArticlesView component', () => {
    test('Test for basic render', () => {
        render(<SelectArticlesView view="grid" />);
        expect(screen.getByTestId('SelectArticlesView')).toBeInTheDocument();
    });
});
