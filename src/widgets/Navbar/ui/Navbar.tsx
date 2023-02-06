import { classNames } from "@/shared/lib";
import classes from './Navbar.module.scss'
import { Link } from "react-router-dom";
import { useTheme } from "@/shared/ThemeProvider";

export const Navbar = () => {
    const {toggleTheme} = useTheme();
    
    return (
        <div className={classNames(classes.Navbar, {}, [])}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div>
                <Link to='/'>Main Page</Link>
                <Link to='/about'>About Page</Link>
            </div>
        </div>
    );
};
