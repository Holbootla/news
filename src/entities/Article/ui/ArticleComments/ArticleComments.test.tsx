import { screen } from '@testing-library/react';
import { ArticleComments } from './ArticleComments';
import { renderCustom } from '@/shared/lib/tests/renderCustom';

describe('Tests for ArticleComments component', () => {
    test('Test for basic render', () => {
        renderCustom(<ArticleComments id="1" />);
        expect(screen.getByTestId('ArticleComments')).toBeInTheDocument();
    });
});
