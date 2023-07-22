import { screen } from '@testing-library/react';
import { Page } from './Page';
import { renderCustom } from '@/shared/lib/tests/renderCustom';

describe('Tests for Page component', () => {
    test('Test for basic render', () => {
        renderCustom(<Page />);
        expect(screen.getByTestId('Page')).toBeInTheDocument();
    });
});
