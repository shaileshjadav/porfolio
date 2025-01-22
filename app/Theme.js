"use client";
import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const html = document.documentElement; // Get the <html> element
    if (theme) {
      html.setAttribute("data-theme", theme); // Set the data-theme attribute
    }
  }, [theme]);

  return (
    <Context.Provider value={[theme, setTheme]}>{children}</Context.Provider>
  );
}

export function useThemeContext() {
  return useContext(Context);
}
