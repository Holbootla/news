import './styles/index.scss';
import { Link, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import useTheme from "./theme/useTheme";

export const App = () => {
    const MainPage = lazy(() => import('./pages/MainPage'));
    const AboutPage = lazy(() => import('./pages/AboutPage'));
    
    const {theme, toggleTheme} = useTheme();
    
    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Toggle Theme</button>
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
};