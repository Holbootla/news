import './index.scss';
import { Link, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

export function App() {
    const MainPage = lazy(() => import('./Pages/MainPage'));
    const AboutPage = lazy(() => import('./Pages/AboutPage'));
    return (
        <div className='app'>
            <Link to='/'>Main Page</Link>
            <Link to='/about'>About Page</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPage />}/>
                    <Route path='/about' element={<AboutPage />}/>
                </Routes>
            </Suspense>
        </div>
    )
}