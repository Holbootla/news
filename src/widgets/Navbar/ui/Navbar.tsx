import { classNames } from "@/shared/lib";
import classes from './Navbar.module.scss'
import { useTheme } from "@/shared/ThemeProvider";
import { AppLink, AppLinkVariants } from "@/shared/ui";

export const Navbar = () => {
    const {toggleTheme} = useTheme();
    
    return (
        <div className={classNames(classes.navbar, {}, [])}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div className={classNames(classes.links, {}, [])}>
                <AppLink to='/' variant={AppLinkVariants.PRIMARY} outline>Main Page</AppLink>
                <AppLink to='/about' variant={AppLinkVariants.SECONDARY} underline={false}>About Page</AppLink>
            </div>
        </div>
    );
};
