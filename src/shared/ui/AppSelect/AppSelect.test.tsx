import { render, screen } from '@testing-library/react';
import { AppSelect } from './AppSelect';

describe('Tests for AppSelect component', () => {
    test('Test for basic render', () => {
        render(
            <AppSelect
                options={[
                    { label: 'Option #1', value: '1' },
                    { label: 'Option #2', value: '2' },
                    { label: 'Option #3', value: '3' },
                ]}
            />,
        );
        expect(screen.getByTestId('AppSelect')).toBeInTheDocument();
    });
});
