import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const stored = window.localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial: Theme = stored ?? (prefersDark ? "dark" : "light");

    setTheme(initial);
    root.classList.toggle("dark", initial === "dark");
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const next: Theme = theme === "dark" ? "light" : "dark";

    setTheme(next);
    root.classList.toggle("dark", next === "dark");
    window.localStorage.setItem("theme", next);
  };

  return (
    <button
      type="button"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/60 text-foreground shadow-sm backdrop-blur hover:border-accent hover:bg-accent/10 hover:text-accent transition-all duration-300"
    >
      {mounted && (
        <span className="relative flex items-center justify-center">
          <Sun
            className={`h-4 w-4 transition-all duration-300 ${
              theme === "dark" ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
            }`}
          />
          <Moon
            className={`absolute h-4 w-4 transition-all duration-300 ${
              theme === "dark" ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0"
            }`}
          />
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;

