import { render, screen } from '@testing-library/react';
import { Tabs } from './Tabs';

describe('Tests for Tabs component', () => {
    test('Test for basic render', () => {
        render(<Tabs tabs={[]} value="1" onChange={(value) => { console.log(value); }} />);
        expect(screen.getByTestId('Tabs')).toBeInTheDocument();
    });
});
