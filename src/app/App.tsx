import { Suspense } from 'react';

import { Route, Routes, Link } from 'react-router-dom';
import './styles/index.scss';

import { classNames } from 'shared/lib/classnames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

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
            <Suspense fallback={<div>...Loading</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/'} element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
