"use client";

import { useState, useEffect, createContext, useContext } from "react";

type Theme = "light" | "dark";
const ThemeContext = createContext<ThemeContextType | null>(null);

type ThemeContextProviderProp = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  handleTheme: () => void;
};

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProp) {
  const [theme, setTheme] = useState<Theme>("light");

  const handleTheme = function () {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const theme = window.localStorage.getItem("theme") as Theme | null;
    if (theme) {
      setTheme(theme);
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {" "}
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
}
