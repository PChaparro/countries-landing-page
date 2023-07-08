"use client";
import React, { useEffect, useState } from "react";
import { Container } from "@/components/layout/Container";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useIsMounted } from "@/hooks/useIsMounted";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const handleThemeChange = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  // Get the icon according to the theme
  const ThemeIcon = theme === "light" ? Moon : Sun;
  const ThemeIconColor = theme === "light" ? "black" : "white";

  const { mounted } = useIsMounted();
  if (!mounted) return null;

  return (
    <header className="py-6 bg-white shadow-md dark:bg-dark-soft shadow-neutral-200/25 dark:shadow-slate-800/20">
      <Container>
        <div className="flex flex-wrap items-center justify-center w-full gap-4 text-center xs:justify-between">
          <Link href="/" className="text-2xl font-extrabold">
            Where in the world?
          </Link>
          <button className="flex gap-2 font-bold" onClick={handleThemeChange}>
            <ThemeIcon size={24} color={ThemeIconColor} />
            {theme === "light" ? "Dark" : "Light"} theme
          </button>
        </div>
      </Container>
    </header>
  );
};
