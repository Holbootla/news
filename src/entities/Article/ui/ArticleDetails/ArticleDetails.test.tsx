import { screen } from '@testing-library/react';
import { ArticleDetails } from './ArticleDetails';
import { renderCustom } from '@/shared/lib/tests/renderCustom';

describe('Tests for ArticleDetails component', () => {
    test('Test for basic render', () => {
        renderCustom(<ArticleDetails id="1" />);
        expect(screen.getByTestId('ArticleDetails')).toBeInTheDocument();
    });
});
