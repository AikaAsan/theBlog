import React, { useState, Suspense, useContext } from 'react';

import { Route, Routes, Link } from 'react-router-dom';
import './styles/index.scss';

import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { AboutMainPageAsync } from './pages/MainPage/MainPage.async';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classnames/classNames';

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
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<AboutMainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
