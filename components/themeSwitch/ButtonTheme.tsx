import { useContext } from "react";
import MyThemeContext from "../../store/ThemeProvider";
import { FiSun, FiMoon } from "react-icons/fi";


export default function ThemeButton() {

    const themeCtx: { isDarkTheme?: boolean; toggleThemeHandler: () => void } =
        useContext(MyThemeContext);


    function toggleThemeHandler(): void {
        themeCtx.toggleThemeHandler();
    }

    return (
        <div
            onClick={() => { toggleThemeHandler() }}
            aria-label="Theme Switcher"
            className="right-5 h-9 w-9 rounded flex items-center justify-center absolute">
            {themeCtx.isDarkTheme
                ? (<FiSun size={26} className="text-yellow-200 hover:text-orange-low text-xl" />)
                : (<FiMoon size={26} className="text-blue-400 hover:text-blue-600 text-xl" />)}
        </div>

    );
}
