import React, { Suspense } from 'react';
import { Counter } from './components/Counter';
import { Route, Routes, Link } from 'react-router-dom';
import './index.scss';

import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { AboutMainPageAsync } from './pages/MainPage/MainPage.async';

const App = () => {
    return (
        <div className='app'>
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
