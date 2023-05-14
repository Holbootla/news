import { render, screen } from '@testing-library/react';
import { CommentCard } from './CommentCard';

describe('Tests for CommentCard component', () => {
    test('Test for basic render', () => {
        render(<CommentCard />);
        expect(screen.getByTestId('CommentCard')).toBeInTheDocument();
    });
});
