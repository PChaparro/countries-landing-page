"use client";
import { ThemeProvider } from "next-themes";

export const ClientLayout = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
};
