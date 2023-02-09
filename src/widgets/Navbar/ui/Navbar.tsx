import { classNames } from "@/shared/lib";
import classes from './Navbar.module.scss'
import { AppLink, AppLinkVariants } from "@/shared/ui";

export const Navbar = () => {
    return (
        <div className={classNames(classes.navbar, {}, [])}>
            <div />
            <div className={classNames(classes.links, {}, [])}>
                <AppLink to='/' variant={AppLinkVariants.PRIMARY} outline>Main Page</AppLink>
                <AppLink to='/about' variant={AppLinkVariants.SECONDARY} underline={false}>About Page</AppLink>
            </div>
        </div>
    );
};
