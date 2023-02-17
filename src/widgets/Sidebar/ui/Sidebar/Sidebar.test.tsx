import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { renderCustom } from '@/shared/lib/tests/renderCustom';

describe('Tests for Sidebar component', () => {
    test('Test for basic render', () => {
        renderCustom(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Test for sidebar toggling', () => {
        renderCustom(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        const toggleButton = screen.getByTestId('toggleSidebarButton');
        expect(toggleButton).toBeInTheDocument();
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('opened');
    });
});
