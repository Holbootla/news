import './styles/index.scss';
import { Link } from "react-router-dom";
import { useTheme } from "@/shared/ThemeProvider";
import { classNames } from "@/shared/lib";
import { AppRouter } from "@/shared/AppRouter";

export const App = () => {    
    const {theme, toggleTheme} = useTheme();
    
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <Link to='/'>Main Page</Link>
            <Link to='/about'>About Page</Link>
            <AppRouter />
        </div>
    )
};