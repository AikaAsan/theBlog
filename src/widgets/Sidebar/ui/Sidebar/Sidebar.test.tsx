import { Sidebar } from './Sidebar';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTranslation } from 
    'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('Sidebar', () => {
    test('Sidebar render', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('Sidebar toggle', () => {
        componentRender(<Sidebar />);
        const btn = screen.getByTestId('toggle-btn');
        fireEvent.click(btn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
