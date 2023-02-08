import './styles/index.scss';

import { classNames } from 'shared/lib/classnames/classNames';
import { useTheme } from './providers/ThemeProvider';

import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}
const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
            <button onClick={toggleTheme}>{theme} THEME</button>
        </div>
    );
};

export default App;
