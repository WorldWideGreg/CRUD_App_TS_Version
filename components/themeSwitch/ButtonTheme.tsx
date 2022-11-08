import { useContext } from "react";
import MyThemeContext from "../../store/ThemeProvider";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';


const ToggleCircle = styled(motion.div)`
    width: 30px;
    height: 20px;
    background-color: white;
    border-radius: 40px;
`;

const Toggle = () => {
    const [toggleDirection, setToggleDirection] = useState(0)
    const toggleOn = () => {
        setToggleDirection(toggleDirection === 0 ? 4 : 0)
    }


    return (
        <ToggleCircle
            onTap={toggleOn}
            animate={{
                x: toggleDirection
            }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 20
            }}
            style={{
                background: toggleDirection ? "#FF7777" : "#FF9F29"
            }}
        />

    )
}

export default function Header() {
        const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } =
            useContext(MyThemeContext);


        function toggleThemeHandler(): void {
            themeCtx.toggleThemeHandler();
        }
        return (
            <div
                className=""
                onClick={toggleThemeHandler}
            >
                <Toggle />
            </div>

        );
    }

