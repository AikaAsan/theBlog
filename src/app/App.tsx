import { Link } from 'react-router-dom';
import './styles/index.scss';

import { classNames } from 'shared/lib/classnames/classNames';
import { useTheme } from './providers/ThemeProvider';

import { AppRouter } from './providers/router';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}
const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>{theme} THEME</button>
            <br />
            <Link to='/about'>ABOUT</Link>
            <br />
            <Link to='/'>MAIN </Link>
            <AppRouter />
        </div>
    );
};

export default App;
