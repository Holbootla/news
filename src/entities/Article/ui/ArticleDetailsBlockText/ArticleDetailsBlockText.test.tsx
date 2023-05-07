import { render, screen } from '@testing-library/react';
import { ArticleDetailsBlockText } from './ArticleDetailsBlockText';
import { blockTextDataMock } from '../../model/mocks/blockTextDataMock';

describe('Tests for ArticleDetailsBlockText component', () => {
    test('Test for basic render', () => {
        render(<ArticleDetailsBlockText block={blockTextDataMock} />);
        expect(screen.getByTestId('ArticleDetailsBlockText')).toBeInTheDocument();
    });
});
