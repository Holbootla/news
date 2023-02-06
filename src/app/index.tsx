import './styles/index.scss';
import { useTheme } from "@/shared/ThemeProvider";
import { classNames } from "@/shared/lib";
import { AppRouter } from "@/shared/AppRouter";
import { Navbar } from "@/widgets/Navbar";

export const App = () => {
    const {theme} = useTheme();
    
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
        </div>
    )
};