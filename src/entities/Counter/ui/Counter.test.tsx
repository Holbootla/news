import { screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';
import { renderCustom } from '@/shared/lib/tests/renderCustom';

describe('Tests for Counter component', () => {
    test('Test for basic render', () => {
        renderCustom(<Counter />, { initialState: { counter: { value: 5 } } });
        expect(screen.getByTestId('counter')).toBeInTheDocument();
        expect(screen.getByTestId('counterValue')).toHaveTextContent('5');
    });

    test('increment', () => {
        renderCustom(<Counter />, { initialState: { counter: { value: 5 } } });
        expect(screen.getByTestId('counter')).toBeInTheDocument();
        expect(screen.getByTestId('counterValue')).toHaveTextContent('5');
        userEvent.click(screen.getByTestId('incrementBtn'));
        expect(screen.getByTestId('counterValue')).toHaveTextContent('6');
    });

    test('decrement', () => {
        renderCustom(<Counter />, { initialState: { counter: { value: 5 } } });
        expect(screen.getByTestId('counter')).toBeInTheDocument();
        expect(screen.getByTestId('counterValue')).toHaveTextContent('5');
        userEvent.click(screen.getByTestId('decrementBtn'));
        expect(screen.getByTestId('counterValue')).toHaveTextContent('4');
    });
});
