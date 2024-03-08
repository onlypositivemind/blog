import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests';
import { Sidebar } from '../../ui/Sidebar/Sidebar';

describe('Sidebar component', () => {
    test('should collapse', () => {
        componentRender(<Sidebar />);

        const sidebar = screen.getByTestId('Sidebar');
        const toggleBtn = screen.getByTestId('ToggleBtn');

        expect(sidebar).toBeInTheDocument();

        fireEvent.click(toggleBtn);
        expect(sidebar).toHaveClass('collapsed');

        fireEvent.click(toggleBtn);
        expect(sidebar).not.toHaveClass('collapsed');
    });
});
