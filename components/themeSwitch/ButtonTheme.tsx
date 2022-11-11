import { useContext } from "react";
import MyThemeContext from "../../store/ThemeProvider";
import { FiSun, FiMoon } from "react-icons/fi";

let Toggler = false;

export default function ThemeButton() {


    const themeCtx: { isDarkTheme?: boolean; toggleThemeHandler: () => void } =
        useContext(MyThemeContext);


    function toggleThemeHandler(): void {
        themeCtx.toggleThemeHandler();
        Toggler = !Toggler;
    }

    return (
        <div
            onClick={() => { toggleThemeHandler() }}
            aria-label="Theme Switcher"
            className="right-5 h-9 w-9 rounded flex items-center justify-center absolute">
            {Toggler
                ?(<FiSun size={26} className="text-yellow-200 hover:text-orange-low text-xl" />)
                :(<FiMoon size={26} className="text-blue-400 hover:text-blue-600 text-xl" />)}


        </div>

    );
}
