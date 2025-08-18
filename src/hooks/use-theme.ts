import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

type ThemeProviderContext = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark";
};

export const ThemeContext = createContext<ThemeProviderContext | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const getSystemTheme = (): "light" | "dark" => {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export const getStoredTheme = (): Theme => {
  if (typeof window === "undefined") return "system";
  return (localStorage.getItem("theme") as Theme) || "system";
};

export const setStoredTheme = (theme: Theme) => {
  if (typeof window === "undefined") return;
  localStorage.setItem("theme", theme);
};

export const applyTheme = (theme: Theme) => {
  if (typeof window === "undefined") return;
  
  const resolvedTheme = theme === "system" ? getSystemTheme() : theme;
  const root = window.document.documentElement;
  
  root.setAttribute("data-theme", resolvedTheme);
  
  // Also set class for compatibility
  root.classList.remove("light", "dark");
  root.classList.add(resolvedTheme);
};

export const useThemeState = () => {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedTheme = getStoredTheme();
    setThemeState(storedTheme);
    
    const resolved = storedTheme === "system" ? getSystemTheme() : storedTheme;
    setResolvedTheme(resolved);
    applyTheme(storedTheme);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") {
        const newResolvedTheme = getSystemTheme();
        setResolvedTheme(newResolvedTheme);
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    setStoredTheme(newTheme);
    
    const resolved = newTheme === "system" ? getSystemTheme() : newTheme;
    setResolvedTheme(resolved);
    applyTheme(newTheme);
  };

  return { theme, setTheme, resolvedTheme };
};