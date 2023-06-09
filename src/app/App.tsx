import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';
import { AboutPage } from '../pages/AboutPage';
import './styles/index.scss';

export const App = () => {
    return (
        <div className='app'>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};
