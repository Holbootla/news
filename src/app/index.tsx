import './styles/index.scss';
import { Link, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { useTheme } from "@/shared/ThemeProvider";
import { classNames } from "@/shared/lib";
import { AboutPage, MainPage } from "@/pages";

export const App = () => {    
    const {theme, toggleTheme} = useTheme();
    
    return (
        <div className={classNames('app', {}, [theme])}>
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