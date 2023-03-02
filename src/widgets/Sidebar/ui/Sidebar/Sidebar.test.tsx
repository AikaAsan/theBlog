import { Sidebar } from './Sidebar';
import { screen, fireEvent } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('Counter', () => {
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
