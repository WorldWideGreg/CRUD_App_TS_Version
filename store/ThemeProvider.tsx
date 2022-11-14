import { createContext, ReactElement, useEffect } from "react";
import React, { useState } from 'react';


const MyThemeContext = createContext<{ isDarkTheme: boolean, toggleThemeHandler?: () => void }>({
  isDarkTheme: true,
});

interface ThemePropsInterface {
  children?: React.ReactNode | Array<React.ReactNode>;
}

export function MyThemeContextProvider({ children }: ThemePropsInterface): ReactElement {

  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => initialThemeHandler());

  function initialThemeHandler(): void {

    const IsLocalStorageNotEmpty = localStorage.getItem("isDarkTheme")

    if (!IsLocalStorageNotEmpty) {
      localStorage.setItem("isDarkTheme", `true`);
      document?.querySelector("body")?.classList.add("dark");
      setIsDarkTheme(true);
    } else {
      const isDarkTheme: boolean = JSON.parse(IsLocalStorageNotEmpty);
      isDarkTheme && document?.querySelector("body")?.classList.add("dark");
      setIsDarkTheme(isDarkTheme);
    }
  }

  function toggleThemeHandler(): void {
    setIsDarkTheme(!isDarkTheme);
    document?.querySelector("body")?.classList.toggle("dark");
    localStorage.setItem("isDarkTheme", `${!isDarkTheme}`);
  }

  return (
    <MyThemeContext.Provider value={{ isDarkTheme, toggleThemeHandler }}>
      {children}
    </MyThemeContext.Provider>
  );
}
export default MyThemeContext;