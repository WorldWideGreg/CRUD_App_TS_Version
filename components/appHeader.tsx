import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import useThemeSwitcher from "./ThemeSwitcher";

function AppHeader() {

    const [activeTheme, setTheme] = useThemeSwitcher();
    
    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
            id="nav"
            className="sm:container sm:mx-auto"
        >     
                  
                    <div
                        onClick={() => setTheme(activeTheme)}
                        aria-label="Theme Switcher"
                        className="cursor-pointer"
                    >
                        {activeTheme === "dark" ? (
                            <FiMoon className=" text-slate-500 text-3xl duration-300" />
                        ) : (
                            <FiSun className=" text-yellow-300 text-3xl duration-300" />
                        )}
                    </div>
                
        </motion.nav>
    );
}

export default AppHeader;