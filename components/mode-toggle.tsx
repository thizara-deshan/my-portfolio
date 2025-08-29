"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  // Set default theme to dark on component mount
  useEffect(() => {
    setTheme("dark");
  }, []);

  // Toggle between dark and light themes
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <Sun className="h-[1.2rem] w-[1.2rem] transition-all duration-300 ease-in-out scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] transition-all duration-300 ease-in-out scale-100 rotate-0 dark:scale-0 dark:rotate-90" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
