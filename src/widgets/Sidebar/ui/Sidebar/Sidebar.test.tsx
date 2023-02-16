import { Sidebar } from './Sidebar';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTranslation } 
    from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
    test('Sidebar render', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('Sidebar toggle', () => {
        renderWithTranslation(<Sidebar />);
        const btn = screen.getByTestId('toggle-btn');
        fireEvent.click(btn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
