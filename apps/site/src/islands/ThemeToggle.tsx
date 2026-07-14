import { useEffect, useState } from "react";

type Theme = "light" | "dark";

/** Theme toggle. The initial class is set by an inline head script (no flash). */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      // ignore storage errors
    }
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={theme === "dark"}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="rounded border border-primary px-2 py-1 text-primary"
      title="Toggle theme">
      {theme === "dark" ? "☀" : "☾"}
    </button>
  );
}
