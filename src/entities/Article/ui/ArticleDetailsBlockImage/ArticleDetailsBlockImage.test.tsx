import { render, screen } from '@testing-library/react';
import { ArticleDetailsBlockImage } from './ArticleDetailsBlockImage';
import { blockImageDataMock } from '../../model/mocks/blockImageDataMock';

describe('Tests for ArticleDetailsBlockImage component', () => {
    test('Test for basic render', () => {
        render(<ArticleDetailsBlockImage block={blockImageDataMock} />);
        expect(screen.getByTestId('ArticleDetailsBlockImage')).toBeInTheDocument();
    });
});
