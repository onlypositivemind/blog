import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('Should collapse', () => {
        componentRender(<Sidebar />);

        const sidebar = screen.getByTestId('sidebar');
        const toggleBtn = screen.getByTestId('toggleBtn');

        expect(sidebar).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(sidebar).toHaveClass('collapsed');
    });
});