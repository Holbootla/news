import { render, screen } from '@testing-library/react';
import { ArticleDetailsBlockCode } from './ArticleDetailsBlockCode';
import { blockCodeDataMock } from '../../model/mocks/blockCodeDataMock';

describe('Tests for ArticleDetailsBlockCode component', () => {
    test('Test for basic render', () => {
        render(<ArticleDetailsBlockCode block={blockCodeDataMock} />);
        expect(screen.getByTestId('ArticleDetailsBlockCode')).toBeInTheDocument();
    });
});
