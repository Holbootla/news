import { render, screen } from '@testing-library/react';
import { CommentList } from './CommentList';

describe('Tests for CommentList component', () => {
    test('Test for basic render', () => {
        render(<CommentList />);
        expect(screen.getByTestId('CommentList')).toBeInTheDocument();
    });
});
