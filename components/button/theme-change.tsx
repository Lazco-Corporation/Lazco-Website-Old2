"use client"

// Third-party Modules
import { useTheme } from "next-themes";
import { Button } from '@radix-ui/themes';

export default function ThemeChange() {
  const { setTheme, theme } = useTheme();
  return (
    <Button onClick={() => setTheme((theme === "dark") ? "light" : "dark")}>Change to {(theme === "dark") ? "light" : "dark"}</Button>
  );
};