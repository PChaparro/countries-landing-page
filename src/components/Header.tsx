"use client";
import React from "react";
import { Container } from "@/components/layout/Container";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const handleThemeChange = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  // Get the icon according to the theme
  const ThemeIcon = theme === "light" ? Moon : Sun;
  const ThemeIconColor = theme === "light" ? "black" : "white";

  return (
    <header className="py-6 bg-white shadow-md dark:bg-gray-600 shadow-neutral-200/25 dark:shadow-gray-800/20">
      <Container>
        <div className="flex flex-wrap items-center justify-center w-full gap-4 text-center xs:justify-between">
          <h1 className="text-2xl font-extrabold">Where in the world?</h1>
          <button className="flex gap-2 font-bold" onClick={handleThemeChange}>
            <ThemeIcon size={24} color={ThemeIconColor} />
            {theme === "light" ? "Dark" : "Light"} theme
          </button>
        </div>
      </Container>
    </header>
  );
};
